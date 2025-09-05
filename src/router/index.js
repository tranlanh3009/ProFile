import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    
    {
        path : '/',
        component: ()=>import('../components/ProFile/index.vue'),
        meta: { layout: 'none' }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router