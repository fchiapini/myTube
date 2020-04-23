import { topicService } from '../services/topicService.js'

const getTopics = (req, res) => res.json(topicService.getTopics())

export const topicController = { getTopics }
