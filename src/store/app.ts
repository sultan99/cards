import type {Action, ActionPayload} from '@holycow/state'
import {createState} from '@holycow/state'

type Theme = `dark` | `light`

type AppState = {
  theme: Theme
  hoverEnabled: boolean
  enableHover: ActionPayload<AppState, boolean>
  toggleTheme: Action<AppState>
}

export const useApp = createState<AppState>({
  theme: `light`,
  hoverEnabled: true,
  enableHover: set => set(`hoverEnabled`),
  toggleTheme: set => () => ({theme}) => {
    const value = theme === `light` ? `dark` : `light`
    set(`theme`, value)
  }
})

export default useApp
