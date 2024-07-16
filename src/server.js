
const express = require('express');
const app = express();
const port = 3000;
const alimentosRoutes = require('./routes/alimentosRoutes');

app.use('/', alimentosRoutes);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
