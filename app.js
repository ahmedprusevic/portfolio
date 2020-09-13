const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
//Connect Database
connectDB();

//init middleware

app.use(express.json({ extended: false }));


// Define routes

app.use('/api/user', require('./routes/api/user'));
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/skills', require('./routes/api/skills'));
app.use('/api/auth', require('./routes/api/auth'));

//Serve statuc assets in production

if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))