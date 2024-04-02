import React, {FC} from 'react'
import Avatar from '@/components/avatar'
import {AvaBox, Description, TextBox, Title} from './styles.module.scss'
import {PostAuthor} from '@/store/mock-data'

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
