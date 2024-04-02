import React, {FC, ChangeEventHandler} from 'react'
import {Input, Icon, Label, Slider, Button} from './styles.module.scss'

interface SwitchProps {
  checked: boolean
  icons: [string, string]
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Switch: FC<SwitchProps> = ({checked, icons, onChange}) => (
  <Label>
    <Input type="checkbox" checked={checked} onChange={onChange}/>
    <Slider>
      <Icon>{icons[0]}</Icon>
      <Button/>
      <Icon>{icons[1]}</Icon>
    </Slider>
  </Label>
)

export default Switch
