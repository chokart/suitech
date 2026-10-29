import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { initAnalytics } from './utils/analytics';

const app = createApp(App);
app.use(router);
app.mount('#app');

// Inicializar Google Analytics de forma no bloqueante
initAnalytics();
