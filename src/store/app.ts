import type {Action} from '@holycow/state'
import {action, createState} from '@holycow/state'

type Theme = `dark` | `light`

type AppState = {
  theme: Theme
  hoverEnabled: boolean
  enableHover: Action<AppState, [boolean]>
  toggleTheme: Action<AppState>
}

export const useApp = createState<AppState>({
  theme: `light`,
  hoverEnabled: true,
  enableHover: action(({set}) => set(`hoverEnabled`)),
  toggleTheme: action(({set, theme}) => () => {
    const value = theme === `light` ? `dark` : `light`
    set(`theme`, value)
  })
})

export default useApp
