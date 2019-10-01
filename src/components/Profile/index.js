import React from 'react';
import {Query} from 'react-apollo';
import gql from "graphql-tag";
import CoursesList from '../Courses'; //Finding it from the export command in the index.js
import ErrorMessage from "../Error";

const Profile = () => (
    <Query query={GET_ALL_COURSES}>
        {({data, loading, error}) => {
            if (error) return <ErrorMessage error={error}/>
            if (loading) return <div>Loading... </div>;
            console.log("Getting data with...");
            const {courses} = data; // This means, get the array that starts with courses.
            console.log(courses);
            return <CoursesList list={courses}/>
        }}
    </Query>
);

const GET_ALL_COURSES = gql`
{
    courses {
        _id
        title
        author
        description
        topic
        url
        price
    }
}
`;

export default Profile;