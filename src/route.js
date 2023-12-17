import {createWebHistory, createRouter} from "vue-router";
import Dashboard from "../src/components/DashboardView.vue";
import Winehouse from "../src/components/WineHouseView.vue"
import Wineroom from "../src/components/WineRoomView.vue"
import WineTank from "./view/WineTankConfView.vue"


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