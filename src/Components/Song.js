import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  text-align: center;
  color: white;
`

const Number = styled.h3`
  text-align: center;
  color: white;
`

const Body = styled.div`
  color: white;
  text-align: center;
`

export default function ({ song }) {
  return (
    <Container>
      <Title>
        {song.title}
      </Title>
      <Number>
        {song.song}
      </Number>
      <Body dangerouslySetInnerHTML={{ __html: song.content }} />
    </Container>
  )
}
