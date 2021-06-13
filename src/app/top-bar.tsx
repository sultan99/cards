import React from 'react'
import Switch from '@/components/switch'
import {Actions, Header, Title} from './styles.scss'
import {useApp} from '@/store'

const TopBar = () => {
  const {hoverEnabled, theme} = useApp()
  const {enableHover, toggleTheme} = useApp()

  return (
    <Header>
      <Title>Stylin demo application</Title>
      <Actions>
        <Switch
          checked={hoverEnabled}
          icons={[`🪁`, `🗿`]}
          onChange={({target}) => enableHover(target.checked)}
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
