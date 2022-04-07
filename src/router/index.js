import Vue from "vue";
import VueRouter from "vue-router";
import Gerentes from "../views/Gerentes.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import provedor from "../provedor";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/gerentes",
    name: "gerentes",
    component: Gerentes,
  },
  {
    path: "/cadastre-se",
    name: "usuario.novo",
    component: () =>
      import(/* webpackChunkName:"registrar" */ "../views/NovoUsuario"),
    meta: {
      publica: true,
    },
  },
  {
    path: "/entrar",
    name: "usuario.entrar",
    component: Login,
    meta: {
      publica: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !provedor.state.token) {
    return next({ name: "usuario.entrar" });
  }
  next();
});

export default router;
