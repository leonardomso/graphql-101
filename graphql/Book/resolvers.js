import BookConnector from "../../connectors/Book/Book";
import AuthorConnector from "../../connectors/Author/Author";

const books = "books";
const bookAdded = "bookAdded";
const bookDeleted = "bookDeleted";

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
            }, context)
                .then(book => book)
                .catch(err => err);
        },
        deleteBook: async (parent, { _id }, context, info) => {
            return await BookConnector.deleteBook({ _id }, context)
                .then(book => book)
                .catch(err => err);
        }
    },
    Book: {
        author: async ({ author }, args, context, info) => {
            return BookConnector.author({ author })
                .then(author => author)
                .catch(err => err);
        }
    },
    Subscription: {
        books: {
            subscribe: (parent, args, { pubsub }) =>   pubsub.asyncIterator(books)
        },
        bookAdded: {
            subscribe: (parent, args, { pubsub }) =>    pubsub.asyncIterator(bookAdded)
        },
        bookDeleted: {
            subscribe: (parent, args, { pubsub }) =>    pubsub.asyncIterator(bookDeleted)
        }
    }
};

export default resolvers;
