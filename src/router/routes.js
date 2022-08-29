import store from "@/state/store";

export default [
  {
    path: "/",
    name: "default",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/dashboards/default"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/account/login"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/login/two-step-verifycation",
    name: "two-step-verification",
    component: () => import("./views/account/two-step-verification"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./views/account/register"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("./views/account/forgot-password"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {

        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch("auth/logOut");
        } 
        else {
          // run vao day
          store.dispatch("authfack/logout");
        }

        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
            route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute ? { name: "default" } : { name: 'login' }
        );
      },
    },
  },
  {
    path: "/404",
    name: "404",
    component: require("./views/utility/404").default,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: "*",
    redirect: "404",
  },
  {
    path: "/dashboard/saas",
    name: "saas-dashboard",
    meta: { authRequired: true },
    component: () => import("./views/dashboards/saas/index"),
  },
  {
    path: "/dashboard/crypto",
    name: "crypto-dashboard",
    meta: { authRequired: true },
    component: () => import("./views/dashboards/crypto/index"),
  },
  {
    path: "/dashboard/blog",
    name: "blog-dashboard",
    meta: { authRequired: true },
    component: () => import("./views/users_roles/users"),
  },
  {
    path: "/users/list",
    name: "users-list",
    meta: { authRequired: true },
    component: () => import("./views/users_roles/users"),
  },
  {
    path: "/roles/list",
    name: "roles-list",
    meta: { authRequired: true },
    component: () => import("./views/users_roles/roles"),
  },
  {
    path: "/resources/list",
    name: "resources-list",
    meta: { authRequired: true },
    component: () => import("./views/users_roles/resources"),
  },
  {
    path: "/permissions/list",
    name: "permissions-list",
    meta: { authRequired: true },
    component: () => import("./views/users_roles/permissions"),
  },
];