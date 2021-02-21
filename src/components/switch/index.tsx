import React, {FC, ChangeEventHandler} from 'react'
import {Input, Icon, Label, Slider, Button} from './styles.scss'

interface SwitchProps {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Switch: FC<SwitchProps> = ({checked, onChange}) => (
  <Label>
    <Input type="checkbox" checked={checked} onChange={onChange}/>
    <Slider>
      <Icon>🪁</Icon>
      <Button/>
      <Icon>🗿</Icon>
    </Slider>
  </Label>
)

export default Switch
