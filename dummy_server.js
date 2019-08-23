var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema} = require('graphql');

// Graphql Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
    message: () => 'Hello World!' // Static resolver that returns hello world when query is being made
};

// Create an express server and a Graphql endpoint
var app = express();
app.use("/graphql", express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () =>
    console.log("Express Graphql server now running on http://localhost:4000/graphql"));