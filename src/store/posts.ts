import {Post, toPosts} from './mock-data'
import {createState, ActionPayload} from '@holycow/state'

type PostState = {
  posts: Post[]
  loading: boolean
  likePost: ActionPayload<PostState, Post[`id`]>
  fetchPosts: ActionPayload<PostState, number>
}

export const usePosts = createState<PostState>({
  posts: [],
  loading: false,
  likePost: set => postId => set(`posts`, posts =>
    posts.map(post => post.id === postId
      ? {...post, liked: !post.liked}
      : post
    )
  ),
  fetchPosts: set => limit => ({posts, loading}) => {
    if (posts.length || loading) return
    set(`loading`, true)
    fetch(`https://randomuser.me/api/?nat=us,dk,fr,gb&results=${limit}`)
      .then(res => res.json())
      .then(toPosts)
      .then(set(`posts`))
      .finally(() => set(`loading`, false))
  }
})

export default usePosts
