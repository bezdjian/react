import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import Menu from './components/Menu';
//import ContactsMain from "./components/ContactsMain";
import * as serviceWorker from './serviceWorker';

import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

import {onError} from 'apollo-link-error';
import ErrorMessage from "./components/Error";
import {ApolloLink} from "apollo-link";

// Errors
const errorLink = onError(({graphqlErrors, networkError}) => {
    if (graphqlErrors || networkError) return <ErrorMessage error={graphqlErrors}/>
});
// Cache
const cache = new InMemoryCache();
//httpLink to graphql backend.
const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
        }`
    }
});

// Combine 2 Links
const link = ApolloLink.from([errorLink, httpLink]);
const client = new ApolloClient({
    link,
    cache
});

ReactDOM.render(<Menu/>, document.getElementById('menu'));

//ReactDOM.render(<ContactsMain />, document.getElementById('contacts'));
ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
