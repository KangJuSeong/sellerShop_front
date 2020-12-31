import axios from 'axios';


export const request = axios.create({
  // Should chnage to environment variable
  baseURL: process.env.REMOTE_SERVER !== undefined ? process.env.REMOTE_SERVER :
    process.env.NODE_ENV === 'production'
      ? process.env.REMOTE_SERVER || 'http://127.0.0.1:8000'
      : process.env.REMOTE_SERVER || 'http://127.0.0.1:8000'
});