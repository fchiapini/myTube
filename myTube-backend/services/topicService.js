import data from '../topics.json'

const getTopics = () => {
  return data.topics.map((topic) => {
    return topic.name
  })
}

export const topicService = { getTopics }
