import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath} from 'url'

import cardapioRouter from './rotas/cardapio.js'
import produtoRouter from './rotas/produto.js';








const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors()); //ilbera as requisições de outroas origens
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.use('/api/cardapio', cardapioRouter);

app.use('/api/produto', produtoRouter);

app.listen(port, () =>{
    console.log(`servidor rodando em http://localhost:${port}`);
});











