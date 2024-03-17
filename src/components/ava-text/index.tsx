import React, {FC} from 'react'
import Avatar from '@/components/avatar'
import styled from 'styled-components'
import {PostAuthor} from '@/store/mock-data'

const AvaBox = styled.div`
  display: flex;

  > div + div {
    margin-left: 10px;
  }
`

const Description = styled.span`
  color: ${prop => prop.theme.secondaryText};
  font-size: 14px;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 16px;
  margin: 0;
`

const AvaText: FC<PostAuthor> = ({imageUrl, lastVisit, name, status}) => (
  <AvaBox>
    <Avatar src={imageUrl} status={status}/>
    <TextBox>
      <Title>{name}</Title>
      <Description>{lastVisit}</Description>
    </TextBox>
  </AvaBox>
)

export default AvaText
