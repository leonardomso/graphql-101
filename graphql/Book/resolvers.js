import BookConnector from "../../connectors/Book";

const resolvers = {
    Query: {
        getBook: async (parent, { _id }, context, info) => {
            return await BookConnector.getBook({ _id })
                .then(user => user)
                .catch(err => err);
        },
        getAllBooks: async (parent, args, context, info) => {
            return await BookConnector.getAllBooks()
                .then(user => user)
                .catch(err => err);
        }
    },
    Mutation: {
        createBook: async (
            parent,
            { title, description, language, author },
            context,
            info
        ) => {
            return await PostConnector.createBook({
                title,
                description,
                language,
                author
            })
                .then(post => post)
                .catch(err => err);
        },
        deleteBook: async (parent, { _id }, context, info) => {
            return await PostConnector.deleteBook({ _id })
                .then(post => post)
                .catch(err => err);
        }
    },
    Author: {}
};

export default resolvers;
