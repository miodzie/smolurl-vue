/**
* This is the initial API interface
* we set the base URL for th´API
*/

import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
})
