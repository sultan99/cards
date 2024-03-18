import PostList from './post-list'
import React from 'react'
import TopBar from './top-bar'
import {Layout} from './styles.scss'
import {useApp, usePosts} from '@/store'

const MAX_RECORDS = 100

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const toggleTheme = async () => {
  for (let i = 0; i < 10; i++) {
    await delay(500)
    useApp.set(`theme`, i % 2 ? `light` : `dark`)
  }
}

const App = () => {
  const theme = useApp(`theme`)
  const fetchPosts = usePosts(`fetchPosts`)
  fetchPosts(MAX_RECORDS)

  return (
    <Layout theme={theme} onClick={toggleTheme}>
      <TopBar/>
      <PostList/>
    </Layout>
  )
}

export default App
