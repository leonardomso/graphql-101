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
    createAuthor: async ({ firstName, lastName, age }) => {
        const newAuthor = await new Author({
            firstName,
            lastName,
            age
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
    books: async ({ _id }) => {
        return await Book.find({ author: _id });
    }
};

export default AuthorConnector;
