const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

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

const PORT = process.env.PORT || 5650;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));