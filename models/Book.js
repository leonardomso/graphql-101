import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

// The best way to work with IDs in GraphQL and MongoDB
// is making the ID returning as a String.
ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    }
});

export default mongoose.model("Book", BookSchema);
