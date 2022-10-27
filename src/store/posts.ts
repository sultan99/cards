import type {Action} from '@holycow/state'
import {Post, toPosts} from './mock-data'
import {action, createState} from '@holycow/state'

type PostState = {
  posts: Post[]
  loading: boolean
  likePost: Action<PostState, [Post[`id`]]>
  fetchPosts: Action<PostState, [number]>
}

export const usePosts = createState<PostState>({
  posts: [],
  loading: false,
  likePost: action(({set, posts}) => postId => {
    const index = posts.findIndex(post => post.id === postId)
    set(`posts.${index}.liked`, liked => !liked)
  }),
  fetchPosts: action(({set, posts, loading}) => limit => {
    if (posts.length || loading) return
    set(`loading`, true)
    fetch(`https://randomuser.me/api/?nat=us,dk,fr,gb&results=${limit}`)
      .then(res => res.json())
      .then(toPosts)
      .then(set(`posts`))
      .finally(() => set(`loading`, false))
  })
})

export default usePosts
