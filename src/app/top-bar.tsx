import React from 'react'
import Switch from '@/components/switch'
import styled from 'styled-components'
import {compose, pick} from '@holycow/state'
import {useApp} from '@/store'

const Actions = styled.div`
  label + label {
    margin-left: 16px;
  }
`
const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 16px 16px 0;
`
const Title = styled.h1`
  margin: 0;
`

const handleHover = compose(
  useApp.enableHover,
  pick(`target.checked`),
)

const TopBar = () => {
  const {hoverEnabled, theme, toggleTheme} = useApp()

  return (
    <Header>
      <Title>Styled-components demo application</Title>
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
