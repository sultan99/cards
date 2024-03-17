import Card from '@/components/card'
import React, {MouseEvent} from 'react'
import styled from 'styled-components'
import {useApp, usePosts} from '@/store'

const List = styled.div`
  display: grid;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin: 16px;
`

const onCardClick = ({currentTarget}: MouseEvent<HTMLElement>) => {
  const postId = currentTarget.id
  usePosts.likePost(postId)
}

const PostList = () => {
  const {hoverEnabled} = useApp()
  const {posts} = usePosts()

  return (
    <List>
      {posts.map(post =>
        <Card
          key={post.id}
          hoverEnabled={hoverEnabled}
          post={post}
          onClick={onCardClick}
        />
      )}
    </List>
  )
}

export default PostList
