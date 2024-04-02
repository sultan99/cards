import PostList from './post-list'
import React from 'react'
import TopBar from './top-bar'
import {Layout} from './styles.module.scss'
import {useApp, usePosts} from '@/store'

const MAX_RECORDS = 100

const App = () => {
  const theme = useApp(`theme`)
  const fetchPosts = usePosts(`fetchPosts`)
  fetchPosts(MAX_RECORDS)

  return (
    <Layout theme={theme}>
      <TopBar/>
      <PostList/>
    </Layout>
  )
}

export default App
