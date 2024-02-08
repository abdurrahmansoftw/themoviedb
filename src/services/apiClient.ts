import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: '268820782756d7c5bf926f8935aabbd2',
  },
})
