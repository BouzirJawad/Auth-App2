const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/usersDB")
        .then(() => console.log("MongoDB is Connected"))
    } catch (error) {
        console.error("Error connecting MongoDb", error)
    }
}

module.exports = connectDB