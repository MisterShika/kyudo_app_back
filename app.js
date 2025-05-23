require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const accountRouter = require("./routes/accountRouter");
const sessionRouter = require("./routes/sessionRouter");

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/users', accountRouter);
app.use('/sessions', sessionRouter);

app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`)
});