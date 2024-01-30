import axios from 'axios'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

// Extend window object with axios
declare global {
  interface Window {
    axios: typeof axios;
    Echo: Echo;
    Pusher: typeof Pusher;
  }
}

window.axios = axios
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
})

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
