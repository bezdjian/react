import React from 'react';
import {Query} from 'react-apollo';
import gql from "graphql-tag";
import RepositoryList from '../Repository'; //Finding it from the export command in the index.js
import ErrorMessage from "../Error";

const Profile = () => (
    <Query query={GET_CURRENT_USER}>
        {({data, loading, error}) => {
            if (error) {
                console.log("ERROR! --- " + error);
                return <ErrorMessage error={error} />
            }
            if (loading) return <div>Loading... </div>;

            const {viewer} = data; // This means, get the array that starts with viewer.
            //example, {viewer: login: '', name: ''}
            console.log(data); // {viewer: login: '', name: ''}
            console.log(viewer); // {login: '', name: ''}
            /*return (
                <div>
                    <div> {viewer.login} </div>
                    <div> {viewer.name} </div>
                </div>
            )*/

            return <RepositoryList repositories={viewer.repositories} />
        }}
    </Query>
);

const GET_CURRENT_USER = gql`
    {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`;

export default Profile;