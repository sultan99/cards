import React, {FC} from 'react'
import styled, {css} from 'styled-components'
import url from '@/url'
import {PostAuthor} from '@/store/mock-data'

const AvatarBox = styled.div<AvatarBoxProps>`
  height: ${props => props.size || `35px`};
  width: ${props => props.size || `35px`};
  position: relative;
`

const Crop = styled.div`
  align-items: center;
  background-color: #e9e9e9;
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`

const Dot = styled.div<DotProps>`
  border-radius: 50%;
  border: 1.5px solid ${props => props.theme.cardSkin};
  bottom: -1.5px;
  height: 25%;
  position: absolute;
  right: -1.5px;
  width: 25%;

  ${props => props.status === `online` && css`
    background-color: #17cc17;
    display: block;
  `}
  
  ${props => props.status === `busy` && css`
    background-color: #ff9030;
    display: block;
  `}

  ${props => props.status === `offline` && css`
    display: none;
  `}
`

const Image = styled.div<ImageProps>`
  background-image: ${props => url(props.src)};
  background-repeat: no-repeat;
  height: 80%;
  margin-top: 20%;
  width: 80%;
`

export interface AvatarProps {
  size?: string
  src: string
  status: PostAuthor[`status`]
}

interface AvatarBoxProps {
  size: string
}

interface ImageProps {
  src: string
}

interface DotProps {
  status: PostAuthor[`status`]
}

const Avatar: FC<AvatarProps> = ({src, status, size}) => (
  <AvatarBox size={size}>
    <Crop>
      <Image src={src}/>
    </Crop>
    <Dot status={status}/>
  </AvatarBox>
)

export default Avatar
