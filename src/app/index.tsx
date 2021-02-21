import React, {useCallback, useEffect, useReducer, useState} from 'react'
import Card from '@/components/card'
import Switch from '@/components/switch'
import fetchData, {Post} from './fetch-data'
import {Header, Layout, List, Title} from './styles.scss'

const MAX_RECORDS = 100

function reducer(state: Post[], action): Post[] {
  if (action.type === `update`) {
    return action.posts
  }
  if (action.type === `like`) {
    const newState = state.map(
      post => post.id === action.postId
        ? {...post, liked: !post.liked}
        : post
    )
    return newState
  }
}

const App = () => {
  const [hoverEnabled, setHoverEnabled] = useState(false)
  const [data, dispatch] = useReducer(reducer, [])

  const onCardClick = useCallback(({currentTarget}) => {
    const postId = currentTarget.id
    dispatch({type: `like`, postId})
  }, [])

  const onSwitchChange = useCallback(({target}) => {
    setHoverEnabled(() => target.checked)
  }, [])

  useEffect(() => {
    const setData = (posts: Post[]) => dispatch({type: `update`, posts})
    fetchData(MAX_RECORDS, setData)
  }, [])

  return (
    <Layout>
      <Header>
        <Title>Stylin demo application</Title>
        <Switch checked={hoverEnabled} onChange={onSwitchChange}/>
      </Header>
      <List>
        {data.map(post =>
          <Card
            key={post.id}
            hoverEnabled={hoverEnabled}
            post={post}
            onClick={onCardClick}
          />
        )}
      </List>
    </Layout>
  )
}

export default App
