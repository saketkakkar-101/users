const mongoose = require('mongoose')
const mongouri =

const mongodb = async(req,res) => {
    try {
        await mongoose.connect(mongouri);
        console.log("connected");

        const fetchedData = mongoose.connection.db.collection("users")
        const data = await fetchedData.find({}).toArray();
        //  console.log(data);
    } catch (error) {
        console.log(error);
    }
}
module.exports = mongodb;