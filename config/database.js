const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbConnect = async () => {
    try {
        if (process.env.NODE_ENV !== 'local') {
            await mongoose.connect(process.env.MONGO_URI);
            console.log('Local Database Is Connected ...');
        } else {
            await mongoose.connect(process.env.MONGO_URI);
            console.log('Local Database Is Connected');
        }
    } catch (err) {
        console.log('Database connection Failed');
    };
}

module.exports = dbConnect;