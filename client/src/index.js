import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Router from "./components/router/router";

import {ApolloClient, InMemoryCache} from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import {createHttpLink} from 'apollo-link-http'

const client = new ApolloClient({
    link: createHttpLink({uri: 'http://localhost:5000/graphql'}),
    cache: new InMemoryCache()
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
