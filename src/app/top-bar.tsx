import React from 'react'
import Switch from '@/components/switch'
import {Actions, Header, Title} from './styles.scss'
import {useApp} from '@/store'

const handleHover = ({target}) => {
  const {enableHover} = useApp()
  enableHover(target.checked)
}

const TopBar = () => {
  const {hoverEnabled, theme, toggleTheme} = useApp()

  return (
    <Header>
      <Title>Stylin demo application</Title>
      <Actions>
        <Switch
          checked={hoverEnabled}
          icons={[`🪁`, `🗿`]}
          onChange={handleHover}
        />
        <Switch
          checked={theme === `light`}
          icons={[`🌞`, `🌕`]}
          onChange={toggleTheme}
        />
      </Actions>
    </Header>
  )
}

export default TopBar
