import AuthorConnector from "../../connectors/Author/Author";
import BookConnector from "../../connectors/Book/Book";

const authors = "authors";
const authorAdded = "authorAdded";
const authorDeleted = "authorDeleted";

const resolvers = {
    Query: {
        getAuthor: async (parent, { _id }, context, info) => {
            return await AuthorConnector.getAuthor({ _id })
                .then(author => author)
                .catch(err => err);
        },
        getAllAuthors: async (parent, args, context, info) => {
            return await AuthorConnector.getAllAuthors()
                .then(authors => authors)
                .catch(err => err);
        }
    },
    Mutation: {
        createAuthor: async (
            parent,
            { firstName, lastName, age },
            context,
            info
        ) => {
            return await AuthorConnector.createAuthor({
                firstName,
                lastName,
                age
            }, context)
                .then(author => author)
                .catch(err => err);
        },
        deleteAuthor: async (parent, { _id }, context, info) => {
            return await AuthorConnector.deleteAuthor({ _id }, context)
                .then(author => author)
                .catch(err => err);
        }
    },
    Author: {
        books: async ({ _id }, args, context, info) => {
            return AuthorConnector.books(_id)
                .then(books => books)
                .catch(err => err);
        }
    },
    Subscription: {
        authors: {
            subscribe: (parent, args, { pubsub }) =>   pubsub.asyncIterator(authors)
        },
        authorAdded: {
            subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator(authorAdded)
        },
        authorDeleted: {
            subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator(authorDeleted)
        }
    }
};

export default resolvers;
