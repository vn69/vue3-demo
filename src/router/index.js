import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "base",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        layout: "base",
        requiresAuth: true,
      },
    },
    {
      path: "/todo-list",
      name: "todo",
      component: () => import("../views/TodoListView.vue"),
      meta: {
        layout: "base",
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
      meta: {
        layout: "default",
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterPage.vue"),
      meta: {
        layout: "default",
      },
    },
    {
      path: "/sign-out",
      name: "sign out",
      component: () => import("../views/SignOut.vue"),
      meta: {
        layout: "default",
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      if (to.name == "login" || to.name == "register") {
        next("/about")
      } else next()
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
