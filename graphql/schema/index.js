const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type AuthData {
    success: String!
    token: String!
}

type rootQuery {
    login(email: String!, password: String!): AuthData!
}

type rootMutation {
    getUsers: AuthData
}

schema {
    query: rootQuery
    mutation: rootMutation
}
`);
