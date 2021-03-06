import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'

import initialStore from './utils/store'

render(
  <Provider store={initialStore()}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
