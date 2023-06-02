import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import { useAuthStore } from './stores/authStore';

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.mount('#app');

const store = useAuthStore();
store.initStore();
