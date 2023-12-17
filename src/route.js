import {createWebHistory, createRouter} from "vue-router";
import Dashboard from "./views/DashboardView.vue";
import Winehouse from "./views/WineHouseView.vue"
import Wineroom from "./views/WineRoomView.vue"
import WineTank from "./views/WineTankConfView.vue"


const routes = [
    {
        path: "/Home",
        component: Dashboard,
    },

    {
        path: "/Winehouse",
        component: Winehouse,
    },

    {
        path: "/Wineroom",
        component: Wineroom,
    },

    {
        path: "/WineTank",
        component: WineTank
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router