import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Projects from "./pages/Projects.vue";
import About from "./pages/AboutUs.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/about-us',
            name: 'about',
            component: About
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export { router };