const express = require('express');
const bodyParser = require('body-parser');
const core = require('cors');
const formRoutes = require('./routes/formRoutes');

const app = express();
const PORT = 3307;


app.use(core());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', formRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
