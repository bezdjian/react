const { mergeResolvers } = require('merge-graphql-schemas');

const Course = require('./Course');

const resolvers = [Course];

module.exports = mergeResolvers(resolvers);