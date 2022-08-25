import axios from 'axios'

const http = axios.create({
    baseURL: 'https://ofqtmwvpob.execute-api.us-east-1.amazonaws.com/dev'
  });

export default http