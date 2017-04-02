import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin: 2em;
  color: #c8c8c8;
  font-size: 1.3em;
  @media (max-width: 520px) {
    margin: 2em 0;
  }
`

const StyledLink = styled(Link)`
  background-color: #c0c6cc;
  color: #272b30;
  border-radius: 4px;
  padding: 5px;
  text-decoration-line: none;
  display: block;
  &:hover {
    color: rgb(122, 130, 136);
    background-color: rgb(192, 198, 204);
  }
`

const Table = styled.table`
  background-color: #2e3338;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(221, 221, 221);
  border-radius: 1px;
  margin-bottom: 20px;
  border-collapse: collapse;
  width: 100%;
`

const SongTitle = styled.td`
`

const SongNumber = styled.td`
  vertical-align: middle;
  box-sizing: border-box;
  &:hover {
    color: rgb(122, 130, 136);
    background-color: rgb(192, 198, 204);
  }
`

const HeadColumn = styled.th`
  vertical-align: middle;
  box-sizing: border-box;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  text-align: left;
  vertical-align: bottom;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(28, 30, 34);
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
`

const SongRow = styled.tr`
  vertical-align: middle;
  box-sizing: border-box;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  height: 38px;
  &:hover {
    background-color: rgb(73, 81, 90);
  }
`

const Head = styled.thead`

`

const MainBody = styled.tbody`
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: rgb(28, 30, 34);
`

const HeadRow = styled.tr`
  height: 31px;
`

const SongItem = ({ song }) => (
  <SongRow>
    <SongNumber>{song.song}</SongNumber>
    <SongTitle>
      <StyledLink
        to={{
          pathname: `/songs/${song.slug}`
        }}
      >
        {song.title}
      </StyledLink>
    </SongTitle>
  </SongRow>
)

export default function ({ songs }) {
  return (
    <Container>
      <Table>
        <Head>
          <HeadRow>
            <HeadColumn>#</HeadColumn>
            <HeadColumn>Song Title</HeadColumn>
          </HeadRow>
        </Head>
        <MainBody>
          {songs && songs.map(song => <SongItem song={song} />)}
        </MainBody>
      </Table>
    </Container>
  )
}
