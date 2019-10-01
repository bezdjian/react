const courseSchema = `
    type Query {
        course(_id: ID!): Course
        courses(topic: String): [Course]
    },
    type Mutation {
        updateCourse(_id: ID!, topic: String!): Course
    }
    type Course {
        _id: ID
        title: String
        author: String
        description: String
        topic: String
        url: String
        price: String
    }
`;

module.exports = courseSchema;
