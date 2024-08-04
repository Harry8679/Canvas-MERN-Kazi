const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
dotenv.config();
const dbConnect = require('./config/database');

if (process.env.NODE_ENV !== 'local') {
    app.use(cors({
        origin: 'http://localhost:5175',
        credentials: true,
    }));
} else {
    app.use(cors({
        credentials: true,
    }));
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './', 'frontend', 'dist', 'index.html'));
    });
}

dbConnect();

const PORT = process.env.PORT || 5650;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));