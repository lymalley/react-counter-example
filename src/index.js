import React from 'react'
import ReactDOM from 'react-dom'

import Component from './component'
import App from './app'

const state = {
  counts: 42
}
React.render(
  <Component instalState={state}>{App}</Component>,
  document.getElementById('app')
)
