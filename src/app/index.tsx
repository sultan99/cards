import PostList from './post-list'
import React, {useEffect} from 'react'
import TopBar from './top-bar'
import {Layout} from './styles.scss'
import {useApp, usePosts} from '@/store'

const MAX_RECORDS = 1000

const App = () => {
  const theme = useApp(`theme`)
  const fetchPosts = usePosts(`fetchPosts`)
  fetchPosts(MAX_RECORDS)
  useEffect(() => {
    setTimeout(() => useApp.set(`theme`, `dark`), 2000)
  }, [])

  return (
    <Layout theme={theme}>
      <TopBar/>
      <PostList/>
    </Layout>
  )
}

export default App
