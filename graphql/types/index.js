// import { mergeTypes } from "merge-graphql-schemas";

// import Author from "./Author/";
// import Book from "./Book/";

// const typeDefs = [Author, Book];

// // NOTE: 2nd param is optional, and defaults to false
// // Only use if you have defined the same type multiple times in
// // different files and wish to attempt merging them together.
// export default mergeTypes(typeDefs, { all: true });

const typeDefs = `
    type Author {
        _id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        books: [Book!]!
    }

    type Book {
        _id: ID!
        title: String!
        description: String!
        language: String!
        author: Author!
    }

    type Query {
        getAuthor(_id: ID!): Author!
        getAllAuthors: [Author!]!
        getBook(_id: ID!): Book!
        getAllBooks: [Book!]!
    }

    type Mutation {
        createAuthor(firstName: String!, password: String!): Author
        deleteAuthor(_id: ID!): Author
        createBook(title: String!, description: String!, language: String!, author: ID!): Book!
        deleteBook(_id: ID!): Book
    }
`;

export default typeDefs;
