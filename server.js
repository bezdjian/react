var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

// Graphql Schema
var schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Mutation {
        updateCourse(id: Int!, topic: String!): Course
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

// Mocking Course data
var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
];

// Mocking get course function
var getCourse = function (args) {
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
};

var getCourses = function (args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic); // return Course that has the matching topic
    } else {
        return coursesData; // return all
    }
};

var updateCourse = function ({id, topic}) {
    coursesData.map(course => {
            if (course.id === id) {
                course.topic = topic;
                return course;
            }
        }
    );
};

// Root resolver
var root = {
    course: getCourse,
    courses: getCourses,
    updateCourse: updateCourse
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