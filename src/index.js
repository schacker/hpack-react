import './styles/common.styl'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Main from './pages/Main'
import { routes } from './routes/index.js'

render(<BrowserRouter><Main router={routes} /></BrowserRouter>, document.getElementById('app'))
