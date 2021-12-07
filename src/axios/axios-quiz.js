import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz2-14ac1-default-rtdb.firebaseio.com/'
})