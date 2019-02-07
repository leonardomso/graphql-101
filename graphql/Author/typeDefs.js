const typeDefs = `
    type Author {
        _id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        books: [Book!]!
    }

    type Query {
        getAuthor(_id: ID!): Author!
        getAllAuthors: [Author!]!
    }

    type Mutation {
        createAuthor(firstName: String!, lastName: String!, age: Int!): Author
        deleteAuthor(_id: ID!): Author
    }
`;

export default typeDefs;
