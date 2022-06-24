const { gql } = require('apollo-server-express');
// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = gql`
    Query: {
        getSingleUser(parent, args, context, info) {
            return getSingleUser;
        }
    },

`

module.exports = resolvers;