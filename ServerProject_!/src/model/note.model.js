const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    "Title": String,
    "Description": String,
    "Image": String,
    "Date": String,
});


const noteModel = mongoose.model("Note", noteSchema);
module.exports = noteModel;