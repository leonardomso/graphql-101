import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

// The best way to work with IDs in GraphQL and MongoDB
// is making the ID returning as a String. 
ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const AuthorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
})

export default mongoose.model('Author', AuthorSchema);