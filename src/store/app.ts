import {createState, Action} from '@holycow/state'

type Theme = `dark` | `light`

type AppState = {
  theme: Theme
  hoverEnabled: boolean
  enableHover: Action<boolean, AppState>
  toggleTheme: Action<undefined, AppState>
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
