require('dotenv').config();

const {GraphQLServer, PubSub} = require('graphql-yoga');
const mongoose = require('mongoose');

const schema = require('../graphql');
const {models} =  require('./db/index');

const pubsub = new PubSub();

const context = {
    models,
    pubsub
};

// MongoDB
mongoose.connect(
    process.env.DB_URL,
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
).then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log(err));

// Create an express index and a Graphql endpoint
const server = new GraphQLServer({
    schema,
    context
});

server.start( ({port}) =>
    console.log(`Graphql server is running on http://localhost:${port}`));