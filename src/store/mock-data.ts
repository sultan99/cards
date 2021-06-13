export interface PostAuthor {
  name: string
  imageUrl: string
  status: `online` | `busy` | `offline`
  lastVisit: string
}
export interface Post {
  id: string
  author: PostAuthor
  liked: boolean
  photoUrl: string
}

const random = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min + 1)) + min
)

const capitalize = (str: string): string => (
  str.charAt(0).toUpperCase() + str.slice(1)
)

const toCapitalize = (str: string): string => (
  str.split(` `).map(capitalize).join(` `)
)

function genUserAva(name: string): string {
  const gender = random(0, 1) ? `male` : `female`
  return `https://avatars.dicebear.com/api/${gender}/${name}.svg`
}

function genLastVisit() {
  const chance = random(0, 8)
  const lastSeen = chance < 3 ? `yesterday` : chance < 6 ? `a week ago` : `a long time ago...`
  return `Last seen ${lastSeen}`
}

const statusText = {
  online: `Hi, I'm online!`,
  busy: `Not now, sorry I'm busy`,
}

function genStatus() {
  const chance = random(0, 10)
  const status = chance < 3 ? `online` : chance < 5 ? `busy` : `offline`
  return {status, lastVisit: statusText[status] || genLastVisit()}
}

const offset = random(1, 100)

export const toPosts = ({results}): Post[] => results.map((item, index) => ({
  id: item.login.uuid,
  photoUrl: `https://picsum.photos/id/${index + offset}/400`,
  liked: random(1, 10) <= 2,
  author: {
    name: toCapitalize(`${item.name.first} ${item.name.last}`),
    imageUrl: genUserAva(item.name.first),
    ... genStatus(),
  }
}))
