import React from 'react';
import {Query} from 'react-apollo';
import gql from "graphql-tag";

const Profile = () => (
    <Query query={GET_CURRENT_USER}>
        {({data, loading, error}) => {
            if (loading) return <div>Loading... </div>;
            if (error) console.log("ERROR! --- " + error);

            const {viewer} = data;
            console.log(viewer);
            return (
                <div>
                    <div> {viewer.login} </div>
                    <div> {viewer.name} </div>
                </div>
            )
        }}
    </Query>
);

const GET_CURRENT_USER = gql`
    {
      viewer {
        login
        name
      }
    }
`;

export default Profile;