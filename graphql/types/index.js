const { mergeTypes } = require('merge-graphql-schemas');

const Course = require('./Course');

const typeDefs = [Course];

module.exports = mergeTypes(typeDefs);