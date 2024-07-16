
import express from 'express';
import alimentosRoutes from './routes/alimentosRoutes.js';

const app = express();
const port = 3000;

app.use('/', alimentosRoutes);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
