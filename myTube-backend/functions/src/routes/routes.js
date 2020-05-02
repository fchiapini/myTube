import * as express from 'express'
import { topicController } from '../controllers/topicController'
import { youtubeController } from '../controllers/youtubeController.js'

const router = express.Router()

router.get('/topics', topicController.getTopics)

router.get('/videos/:topic', youtubeController.getTopicVideos)

export { router }
