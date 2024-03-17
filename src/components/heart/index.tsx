import React, {FC} from 'react'
import heartSvg from './heart.svg'
import styled from 'styled-components'
import url from '@/url'

const Icon = styled.div<IconProps>`
  --size: 24px;
  background-color: ${props => props.isRed ? `#ff056d` : props.theme.ghost};
  height: var(--size);
  width: var(--size);
  mask-image: ${props => url(props.src)};
  -webkit-mask-image: ${props => url(props.src)};
`
interface CardProps {
  isRed: boolean
}

interface IconProps {
  isRed: boolean
  src: string
}

const Heart: FC<CardProps> = ({isRed}) => (
  <Icon isRed={isRed} src={heartSvg}/>
)

export default Heart
