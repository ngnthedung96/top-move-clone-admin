import store from "@/state/store";

export default [
  {
    path: "/",
    name: "default",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/default"),
  },
  {
    path: "/thong-tin-ca-nhan",
    name: "userIn4",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/user/userIn4"),
  },
  {
    path: "/thong-bao",
    name: "notification",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/user/noticUser"),
  },
  {
    path: "/gia-han-goi-cuoc",
    name: "renewPack",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/user/renewPack"),
  },
  {
    path: "/thong-ke",
    name: "countPage",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/count"),
  },

  {
    path: "/danh-sach-tai-khoan",
    name: "userList",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNUsers/userList"),
  },
  {
    path: "/tao-tai-khoan",
    name: "creUser",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNUsers/creUser"),
  },
  {
    path: "/quan-ly-kho-hang",
    name: "storeOrder",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/storeOrder"),
  },
  {
    path: "/cai-dong-gia",
    name: "setSamePrice",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNUsers/setSamePrice"),
  },
  {
    path: "/tai-khoan-ngan-hang-khach-hang",
    name: "userBankAcc",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNUsers/userBankAcc"),
  },
  {
    path: "/quan-li-don-hang",
    name: "MNOrder",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNOrder/MNOrder"),
  },
  {
    path: "/tra-cuu-don-hang",
    name: "searchOrder",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNOrder/searchOrder"),
  },
  {
    path: "/quan-li-don-tu-doi-tac",
    name: "impFileFrPartner",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNOrder/impFileFrPartner"),
  },
  {
    path: "/quan-li-phan-hoi",
    name: "resOrder",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNOrder/resOrder"),
  },
  {
    path: "/quan-li-don-hang-loat",
    name: "fileOrder",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNOrder/fileOrder"),
  },
  {
    path: "/thong-bao-don-fail",
    name: "noticOrder",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNOrder/noticOrder"),
  },
  {
    path: "/quan-li-cod-shipper",
    name: "CODShipper",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNPoOf/CODShipper"),
  },
  {
    path: "/quan-li-cod-buu-cuc",
    name: "CODPoOf",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNPoOf/CODPoOf"),
  },
  {
    path: "/ton-don-nhap-kho",
    name: "imStock",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNPoOf/imStock"),
  },
  {
    path: "/kiem-ke-hang-hoa",
    name: "checkPro",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNPoOf/checkPro"),
  },
  {
    path: "/quan-li-giao-hang-shipper",
    name: "MNShip",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNPoOf/MNShip"),
  },
  {
    path: "/pickup",
    name: "pickup",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNPoOf/pickup"),
  },
  {
    path: "/quan-li-kien-hang",
    name: "checkPack",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNPoOf/checkPack"),
  },
  {
    path: "/quan-li-don-duyet",
    name: "returnOr",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/MNPoOf/returnOr"),
  },
  {
    path: "/quet-lay-hang",
    name: "scGetPro",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanCode/scGetPro"),
  },
  {
    path: "/quet-nhap-kho",
    name: "scImStock",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanCode/scImStock"),
  },
  {
    path: "/quet-giao-hang",
    name: "scDelivery",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanCode/scDelivery"),
  },
  {
    path: "/quet-ky-nhan",
    name: "scSign",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanCode/scSign"),
  },
  {
    path: "/quet-kien-hang-co-van-de",
    name: "scSign",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanCode/scProblemWPro"),
  },
  {
    path: "/quet-bao-hoan",
    name: "scSign",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanCode/scReturnNotic"),
  },
  {
    path: "/quet-thong-tin-kien-hang",
    name: "scSign",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanCode/scanIn4"),
  },
  {
    path: "/chuyen-don-giao-shipper",
    name: "scGiveShipper",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanCode/scGiveShipper"),
  },
  {
    path: "/chon-quet-lay-hang-hang-loat",
    name: "scsgetPro",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanMore/scsgetPro"),
  },
  {
    path: "/chon-nhap-kho-hang-loat",
    name: "scsImStock",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanMore/scsImStock"),
  },
  {
    path: "/chon-day-doi-tac-hang-loat",
    name: "scsImStock",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/scanMore/scsPartner"),
  },

  {
    path: "/phieu-doi-soat",
    name: "recoPage",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/reconcilation/recoOld")
  },
  {
    path: "/phieu-doi-soat-new",
    name: "recoPageNew",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/reconcilation/recoNew")
  },

  {
    path: "/ecm",
    name: "test",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/tables/basictable"),
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