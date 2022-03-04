import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import Docroot from './components/Docroot.vue'

import {createRouter, createWebHashHistory} from 'vue-router';

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path:'',
                    component: Docroot
                },
                {
                    path: 'switch',
                    component: Switch
                },
                {
                    path: 'button',
                    component: Button
                },
                {
                    path: 'dialog',
                    component: Dialog
                },
                {
                    path: 'tabs',
                    component: Tabs
                }
            ]
        },
    ]}
)