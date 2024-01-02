import {createWebHistory, createRouter} from "vue-router";
import Dashboard from "./views/DashboardView.vue";
import Winehouse from "./views/WineHouseView.vue"
import Wineroom from "./views/WineRoomView.vue"
import WineTank from "./views/WineTankConfView.vue"
import CreateWineRoom from "./views/CreateWineRoomView.vue"


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
    },
    {
        path: "/CreateWineRoom",
        component: CreateWineRoom
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router