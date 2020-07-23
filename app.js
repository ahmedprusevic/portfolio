const express = require('express');
const connectDB = require('./config/db');

const app = express();
//Connect Database
connectDB();

//init middleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API is Live'));

// Define routes

app.use('/api/user', require('./routes/api/user'));
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/skills', require('./routes/api/skills'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))