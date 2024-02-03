import { getStorage } from '@bingoben/b-storage'
import axios from 'axios'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import { CrowdLocalStorage } from './hooks/useLocalStorage'

// Extend window object with axios
declare global {
  interface Window {
    axios: typeof axios;
    Echo: Echo;
    Pusher: typeof Pusher;
    apiUrl: string;
  }
}

window.apiUrl = import.meta.env.VITE_API_URL

// Axios conf
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['Accept'] = 'application/json'
window.axios.defaults.headers.common['Authorization'] = `Bearer ${getStorage<CrowdLocalStorage>().auth_token}`
window.axios.defaults.baseURL = window.apiUrl

// Auth conf
window.axios.get('/csrf-cookie').then(() => {
  window.axios.defaults.withCredentials = true
  window.axios.defaults.withXSRFToken = true
})

// Pusher conf
window.Pusher = Pusher
window.Echo = new Echo({
  broadcaster: 'pusher',
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  wsHost: import.meta.env.VITE_PUSHER_HOST,
  wsPort: import.meta.env.VITE_PUSHER_PORT,
  wssHost: import.meta.env.VITE_PUSHER_HOST,
  wssPort: import.meta.env.VITE_PUSHER_PORT,
  forceTLS: true,
  encrypted: true,
  disableStats: true,
  enabledTransports: ['ws', 'wss'],
  authorizer: (channel: any) => {
    return {
      authorize: (socketId: any, callback: any) => {
        window.axios.post('/broadcasting/auth', {
          socket_id: socketId,
          channel_name: channel.name
        }).then(response => {
          callback(false, response.data)
        }).catch(error => {
          callback(true, error)
        })
      }
    }
  }
})