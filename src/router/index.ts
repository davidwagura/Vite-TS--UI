import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

    const routes = [
      { path: "/", component: Login },
      { path: "/about", component: Register },
    ];

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes,
    });
    export default router;