import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import PersonajesVista from "../views/PersonajesVista.vue";
import About from "../views/About.vue";

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    path: "/personajes",
    name: "Personajes",
    component: PersonajesVista,
  },

  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
