import {createWebHistory, createRouter} from "vue-router";
import Dashboard from "../src/components/DashboardView.vue";
import Winehouse from "../src/components/WineHouseView.vue"


const routes = [
    {
        path: "/Home",
        component: Dashboard,
    },

    {
        path: "/Winehouse",
        component: Winehouse,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router