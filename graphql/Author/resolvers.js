import AuthorConnector from "../../connectors/Author/Author";
import BookConnector from "../../connectors/Book/Book";

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
        createAuthor: async (parent, { email, password }, context, info) => {
            return await AuthorConnector.createAuthor({
                email,
                password
            })
                .then(author => author)
                .catch(err => err);
        },
        deleteAuthor: async (parent, { _id }, context, info) => {
            return await AuthorConnector.deleteAuthor({ _id })
                .then(author => author)
                .catch(err => err);
        }
    },
    Author: {
        books: async ({ _id }, args, context, info) => {
            return BookConnector.books(_id)
                .then(books => books)
                .catch(err => err);
        }
    }
};

export default resolvers;
