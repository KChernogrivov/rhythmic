import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyMusicView from "@/views/MyMusicView";
import NewestView from "@/views/NewestView";
import TopChartsView from "@/views/TopChartsView";
import ArtistsView from "@/views/ArtistsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/mymusic",
    name: "mymusic",
    component: MyMusicView,
  },
  {
    path: "/topcharts",
    name: "topcharts",
    component: TopChartsView,
  },
  {
    path: "/newest",
    name: "newest",
    component: NewestView,
  },
  {
    path: "/artists",
    name: "artists",
    component: ArtistsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
