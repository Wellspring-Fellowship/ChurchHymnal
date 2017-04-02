import React, { Component } from 'react'
import songs from './posts.json'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Components/Header'
import SongList from './Components/SongList'
import Song from './Components/Song'

const RouteContainer = styled.div`
  background-color: #272b30;
  min-height: 100vh;
  height: 100%
`

class App extends Component {
  state = {
    filter: ''
  };

  getFilteredSongs = () => {
    const { filter } = this.state
    if (filter && filter !== '') {
      return songs.filter(
        song =>
          song.title.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
          song.song.toLowerCase().indexOf(filter.toLowerCase()) > -1
      )
    }
    return songs
  };

  setFilter = event => {
    this.setState({ filter: event.target.value })
  };

  render () {
    return (
      <Router>
        <RouteContainer>
          <Header onFilter={this.setFilter} filter={this.state.filter} />
          <Route
            exact
            path='/'
            component={() => <SongList songs={this.getFilteredSongs()} />}
          />
          {songs &&
            songs.map(song => (
              <Route
                path={`/songs/${song.slug}`}
                component={() => <Song song={song} />}
              />
            ))}
        </RouteContainer>
      </Router>
    )
  }
}

export default App
