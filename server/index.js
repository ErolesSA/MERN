import express from 'express';
import { PORT } from './config.js'; 
import router from './routes/index.router.js'


const app = express();

app.use(router)

app.listen(PORT)

console.log(`Server runing in the port ${PORT}`  );

