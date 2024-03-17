/* eslint-disable max-len */
import React, {FC} from 'react'
import Author from '@/components/ava-text'
import Heart from '@/components/heart'
import styled, {css} from 'styled-components'
import {Post} from '@/store/mock-data'

const CardBox = styled.div<CardBoxProps>`
  background-color: ${props => props.theme.cardSkin};
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  cursor: pointer;
  display: flex;
  flex-direction: column;  
  overflow: hidden;
  transition: transform 300ms, box-shadow 300ms;
  width: 100%;
  -webkit-backface-visibility: hidden;

  ${props => props.hoverEnabled && css`
    &:hover {
      box-shadow: 0px 3px 8px 1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 10%), 0px 1px 3px 0px rgb(0 0 0 / 10%);
      transform: translate3d(0, -2px, 0) scale(1.02);
    }
  `}
`

const Picture = styled.img`
  background-color: ${props => props.theme.ghost};
  height: 340px;
  object-fit: cover;
`

const Footer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 16px;
`

interface CardProps {
  hoverEnabled?: boolean
  post: Post
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

interface CardBoxProps {
  hoverEnabled?: boolean
}

const handleError = ({target}) => {
  const newId = Math.floor(Math.random() * 1000)
  const url = target.src.replace(/\d+/, newId)
  target.src = url
}

const Card: FC<CardProps> = ({hoverEnabled, post, onClick}) => (
  <CardBox id={post.id} hoverEnabled={hoverEnabled} onClick={onClick}>
    <Picture src={post.photoUrl} onError={handleError}/>
    <Footer>
      <Author {...post.author} />
      <Heart isRed={post.liked}/>
    </Footer>
  </CardBox>
)

export default React.memo(Card,
  (prev, next) => (
    prev.post.liked === next.post.liked &&
    prev.hoverEnabled === next.hoverEnabled
  )
)
