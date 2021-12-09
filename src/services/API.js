/**
* This is the initial API interface
* we set the base URL for th´API
*/

import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'localhost:8000',
  withCredentials: true,
})
