import Card from '@/components/card'
import React, {MouseEvent} from 'react'
import {List} from './styles.scss'
import {useApp, usePosts} from '@/store'

const onCardClick = ({currentTarget}: MouseEvent<HTMLElement>) => {
  const {likePost} = usePosts()
  const postId = currentTarget.id
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
