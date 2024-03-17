import React, {FC, ChangeEventHandler} from 'react'
import styled from 'styled-components'

const Slider = styled.div`
  align-items: center;
  background-color: ${props => props.theme.ghost};
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  transform: translateX(-33.33%);
  position: absolute;
  transition: all 0.4s;
  width: 150%;
  height: 100%;
  -webkit-backface-visibility: hidden;
`

const Input = styled.input`
  left: 0;
  opacity: 0;
  position: absolute;

  &:checked + ${Slider} {
    background-color: ${props => props.theme.switchActive};
    transform: translateX(0) scale(1);
    > .button {
      background-color: white;
    }
  }
`

const Icon = styled.span`
  font-size: var(--size-emoji);
  opacity: 0.75;
  text-align: center;
  user-select: none;
`

const Label = styled.label`
  --height: 28px;
  --height-slider: calc(var(--height) * 0.80);
  --size-emoji: calc(var(--height) / 2);
  --width: calc(var(--height) * 2);
  border-radius: var(--height);
  display: inline-block;
  height: var(--height);
  overflow: hidden;
  position: relative;
  width: var(--width);
  &:hover .button {
    background-color: white;
  }
`

const Button = styled.span`
  background-color: ${props => props.theme.switchSkin};
  border-radius: 50%;
  height: var(--height-slider);
  justify-self: center;
  width: var(--height-slider);
`

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
