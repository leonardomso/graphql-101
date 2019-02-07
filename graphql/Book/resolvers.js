import BookConnector from "../../connectors/Book/Book";
import AuthorConnector from "../../connectors/Author/Author";

const resolvers = {
    Query: {
        getBook: async (parent, { _id }, context, info) => {
            return await BookConnector.getBook({ _id })
                .then(book => book)
                .catch(err => err);
        },
        getAllBooks: async (parent, args, context, info) => {
            return await BookConnector.getAllBooks()
                .then(books => books)
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
            return await BookConnector.createBook({
                title,
                description,
                language,
                author
            })
                .then(book => book)
                .catch(err => err);
        },
        deleteBook: async (parent, { _id }, context, info) => {
            return await BookConnector.deleteBook({ _id })
                .then(book => book)
                .catch(err => err);
        }
    },
    Book: {
        author: async ({ _id }, args, context, info) => {
            return AuthorConnector.books(_id)
                .then(author => author)
                .catch(err => err);
        }
    }
};

export default resolvers;
