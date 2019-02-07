import Author from "../../models/Author";
import Book from "../../models/Book";

const AuthorConnector = {
    getAuthor: async ({ _id }) => {
        return await Author.findById(_id)
            .populate()
            .then(author => author)
            .catch(err => err);
    },
    getAllAuthors: async () => {
        return await Author.find()
            .populate()
            .then(authors => authors)
            .catch(err => err);
    },
    createAuthor: async ({ firstName, password }) => {
        const newAuthor = await new Author({
            firstName,
            password
        });

        return new Promise((resolve, reject) => {
            newAuthor.save((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    },
    deleteAuthor: async ({ _id }) => {
        return await Author.findOneAndDelete({ _id });
    },
    book: async ({ book }) => {
        return await Book.findById(book);
    }
};

export default AuthorConnector;
