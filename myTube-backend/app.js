import express from 'express'
import { router } from './routes/routes'
import bodyParser from 'body-parser'
import cors from 'cors'
// import https from 'https'

require('dotenv').config()

const PORT = process.env.PORT
const HOST = process.env.HOST

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

app.get('/', (req, res) => res.send('Welcome to MyTube App!'))

app.listen(PORT, HOST, () => console.log(`Server running on port ${PORT}!`))
// https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
// }, app)
// .listen(5000, () => console.log(`Server running on port ${PORT}!`));
