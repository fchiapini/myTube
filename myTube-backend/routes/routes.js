import express from 'express'
import { youtubeController } from '../controllers/youtubeController.js'

const router = express.Router()

router.get('/videos/:topic', youtubeController.getVideos)

export { router }
