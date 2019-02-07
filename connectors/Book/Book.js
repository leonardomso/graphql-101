import Book from "../../models/Book";
import Author from "../../models/Author";

const BookConnector = {
    getBook: async ({ _id }) => {
        return await Book.findById(_id)
            .populate()
            .then(book => book)
            .catch(err => err);
    },
    getAllBooks: async () => {
        return await Book.find()
            .populate()
            .then(books => books)
            .catch(err => err);
    },
    createBook: async ({ title, description, language, author }) => {
        const newBook = await new Book({
            title,
            description,
            language,
            author
        });

        return new Promise((resolve, reject) => {
            newBook.save((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    },
    deleteBook: async ({ _id }) => {
        return await Book.findOneAndDelete({ _id });
    },
    author: async ({ author }) => {
        return await Author.findById(author);
    }
};

export default BookConnector;
