const express = require('express');
const express_graphql = require('express-graphql');

const schema = require('./schema');
const resolver = require('./resolvers');

const MongoDB = require('mongodb');

// Connect to MongoDB
const db = () => MongoDB.connect('mongodb://localhost/graphql_db');

// Root resolver
const root = {
    course: resolver.getCourse,
    courses: resolver.getCourses,
    updateCourse: resolver.updateCourse
};

// Create an express server and a Graphql endpoint
const app = express();
app.use("/graphql", express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: db
}));


app.listen(4000, () =>
    console.log("Express Graphql server now running on http://localhost:4000/graphql"));