import data from '../topics.json'

const getTopics = () => {
  return data.topics.map((topic) => {
    return { name: topic.name, image: topic.image }
  })
}

export const topicService = { getTopics }
