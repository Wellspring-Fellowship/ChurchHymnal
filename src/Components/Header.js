import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

const Container = styled.div``

const Title = styled.h1`
 margin: 0;
 padding: 1em;
 text-align: center;
`

const Form = styled.form`
  text-align: center;
  font-size: 1.2em;
`

const Input = styled.input`
  background-color: white;
  color: black;

`

const Label = styled.label`
  color: white;
`

const StyledLink = styled(Link)`
 color: #c8c8c8;
`

function FilterInput (
  {
    onFilter,
    filter,
    handleSubmit
  }
) {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        SEARCH:{' '}
        <Input type='text' value={filter} onChange={onFilter} />
      </Label>
      <input type='submit' value='' style={{ display: 'none' }} />
    </Form>
  )
}

class Header extends Component {
  constructor (props) {
    super()
    this.unlisten = props.history.listen(location => {
      if (location.pathname !== '/') {
        this.props.onFilter({ target: { value: '' } })
      }
    })
  }

  componentWillUnmount () {
    this.unlisten()
  }

  handleSubmit = event => {
    const {
      filter,
      location,
      history
    } = this.props
    if (filter !== '' && location.pathname !== '/') {
      history.push('/')
    }
    event.preventDefault()
  };

  render () {
    const {
      onFilter,
      filter
    } = this.props
    return (
      <Container>
        <Title>
          <StyledLink
            to={{
              pathname: '/'
            }}
          >
            Wellspring Fellowship Hymnal
          </StyledLink>
        </Title>
        <FilterInput
          onFilter={onFilter}
          filter={filter}
          handleSubmit={this.handleSubmit}
        />
      </Container>
    )
  }
}

export default withRouter(Header)
