import React from 'react'
import ReactDOM from 'react-dom'

import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'

import App from './components/App'

import './index.css'

const client = new ApolloClient({uri: 'http://localhost:4000'})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
