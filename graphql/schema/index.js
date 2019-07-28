const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
    _id: ID!
    name: String!
    email: String!
    password: String
}
type AuthData {
<<<<<<< HEAD
    success: Boolean
    token: String
}
type Errors {
    name: String
    password: String
}

type LoginResponse {
    response: AuthData
    errors: Errors
=======
    userId: ID!
    token: String!
    exp: Int!
>>>>>>> ba0c53f8ef58b00261b634668abc35ce9433d56d
}
input UserInput {
    name: String!
    email: String!
    password: String!
    password2: String!
}

type rootQuery {
<<<<<<< HEAD
    login(email: String!, password: String!): LoginResponse!
=======
    login(email: String!, password: String!): AuthData!
>>>>>>> ba0c53f8ef58b00261b634668abc35ce9433d56d
}

type rootMutation {
    register(UserInput: UserInput!): User!
}
schema {
    query: rootQuery
    mutation: rootMutation
}
`);
