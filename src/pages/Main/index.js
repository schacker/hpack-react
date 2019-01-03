import React, { Component } from 'react'
import Header from 'components/Header'
import Container from 'components/Container'

import './index.styl'

export default class extends Component {
  render () {
    return <div className='wrap-container'>
      <Header />
      <Container router={this.props.router} />
    </div>
  }
}
