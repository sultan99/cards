import React, {useCallback, useEffect, useReducer, useState} from 'react'
import Card from '@/components/card'
import Switch from '@/components/switch'
import fetchData, {Post} from './fetch-data'
import {Actions, Header, Layout, List, Title} from './styles.scss'
import {LayoutProps} from './styles.scss'

const MAX_RECORDS = 100

type ThemeType = LayoutProps[`theme`]

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
  const [theme, setTheme] = useState<ThemeType>(`light`)
  const [hoverEnabled, setHoverEnabled] = useState(true)
  const [data, dispatch] = useReducer(reducer, [])

  const onThemeChange = useCallback(({target}) => {
    setTheme(() => target.checked ? `light` : `dark`)
  }, [])

  const onHoverChange = useCallback(({target}) => {
    setHoverEnabled(() => target.checked)
  }, [])

  const onCardClick = useCallback(({currentTarget}) => {
    const postId = currentTarget.id
    dispatch({type: `like`, postId})
  }, [])

  useEffect(() => {
    const setData = (posts: Post[]) => dispatch({type: `update`, posts})
    fetchData(MAX_RECORDS, setData)
  }, [])

  return (
    <Layout theme={theme}>
      <Header>
        <Title>Stylin demo application</Title>
        <Actions>
          <Switch
            checked={hoverEnabled}
            icons={[`🪁`, `🗿`]}
            onChange={onHoverChange}
          />
          <Switch
            checked={theme === `light`}
            icons={[`🌞`, `🌕`]}
            onChange={onThemeChange}
          />
        </Actions>
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
