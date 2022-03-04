import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Fir from './components/Fir.vue';
import Fir2 from './components/Fir2.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Fir
        },
        {
            path: '/xxx',
            component: Fir2
        },
    ]}
)

const app = createApp(App)
app.use(router);
app.mount('#app')
