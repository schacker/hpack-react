import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Sider from 'components/Sider'

import './index.styl'

export default class extends Component {
  render () {
    return <div className='main-container'>
      <Sider router={this.props.router} />
      <div className='content-container'>
        {
          this.props.router.map((item, i) => <Route key={i} exact={item.exact} path={item.path} component={item.component} />)
        }
      </div>
    </div>
  }
}
