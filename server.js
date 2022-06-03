import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import memoryRouter from './routers/memoryRouter.js';

dotenv.config();
const app = express()

const port = process.env.PORT || 3005;

app.use(express.json({ limit: '20mb' }))
app.use('/memories', memoryRouter);
/* app.get('/', (req, res) => {
    res.json({ message: '5000. porta yapilan get istegi' })
}) */

app.listen(port, () => {
    console.log(`${port}. portta dinliyor`);

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       // useFindAndModify: true,

    }).then(() => console.log('database connected'))
        .catch((err) => console.log(err))

}) 