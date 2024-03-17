import PostList from './post-list'
import React, {useEffect} from 'react'
import TopBar from './top-bar'
import styled from 'styled-components'
import {ThemeProvider} from 'styled-components'
import {useApp, usePosts} from '@/store'

const MAX_RECORDS = 1000

const light = {
  cardSkin: `#fbfbfb`,
  ghost: `#cacaca`,
  primaryText: `black`,
  secondaryText: `#8b8b8b`,
  skin: `#fdfdfd`,
  switchActive: `#90edff`,
  switchSkin: `white`,
}

const dark = {
  cardSkin: `#242424`,
  ghost: `#525252`,
  primaryText: `white`,
  secondaryText: `#939393`,
  skin: `#0a0a0a`,
  switchActive: `#9899df`,
  switchSkin: `#bdbdbd`,
}

const Layout = styled.section` 
  background-color: ${props => props.theme.skin};
  color: ${props => props.theme.primaryText};
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const themes = {dark, light} as const

const App = () => {
  const theme = useApp(`theme`)
  const fetchPosts = usePosts(`fetchPosts`)
  fetchPosts(MAX_RECORDS)
  useEffect(() => {
    setTimeout(() => useApp.set(`theme`, `dark`), 2000)
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <Layout>
        <TopBar/>
        <PostList/>
      </Layout>
    </ThemeProvider>
  )
}

export default App
