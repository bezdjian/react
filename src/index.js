import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactsMain from './components/ContactsMain';
import App from './App';
import Menu from './components/Menu';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

const cache = new  InMemoryCache();
const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
        }`
    }
});
const client = new ApolloClient({
    link: httpLink,
    cache
});

ReactDOM.render(<Menu />, document.getElementById('menu'));

//ReactDOM.render(<ContactsMain />, document.getElementById('contacts'));
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
