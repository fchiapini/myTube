import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as bodyParser from 'body-parser'

import { router } from './routes/routes.js'

admin.initializeApp(functions.config().firebase)

require('dotenv').config()

const app = express()

app.use('/api', router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Welcome to MyTube App!'))

export const webApi = functions.https.onRequest(app)
