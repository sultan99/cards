import Card from '@/components/card'
import React from 'react'
import {List} from './styles.scss'
import {useApp, usePosts} from '@/store'

const onCardClick = ({currentTarget}) => {
  const {likePost} = usePosts()
  const postId = currentTarget.id as string
  likePost(postId)
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
