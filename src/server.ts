import * as dotenv from 'dotenv'
import express, {Request, Response} from 'express'
import mongoose from 'mongoose'
import router from './routes'

dotenv.config()
const app = express()

app.use(express.json())
app.use(router)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const PORT = process.env.PORT

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fusdpbt.mongodb.net/?retryWrites=true&w=majority`)
.then((data) =>{
    console.log('Conectado com sucesso ao MongoDB!')
})
.catch((erro) =>{
    console.log('Erro ao conectar ao MongoDB!', erro.message)
})




app.listen(PORT)