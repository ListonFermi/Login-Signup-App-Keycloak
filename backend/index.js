const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

// Signup route
app.get('/userData', async (req, res) => {
    
    const bearerHeader = req.headers['Authorization']
    console.log({bearerHeader});

    res.status(201).json({ username : 'hehehe' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
