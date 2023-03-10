import express from "express"
import cors from 'cors'


const app  = express()
const PORT = process.env.PORT || 8081


app.use(cors())
app.use(express.json());
app.get('/', (req, res)=> {
    res.send('<h1>Hello World</h1>')
})


app.listen(PORT, ()=> console.log(`Serverhas been started on PORT ${PORT}`))

