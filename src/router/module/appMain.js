import Layout from "../../layout/index.vue";
export const appMainRouter = [
  {
    path: "/",
    redirect: "/monitoring",
    component: Layout,
    name: "",
    meta: {
      title: "Monitoring",
      icon: "lock",
    },
    children: [
      {
        path: "monitoring",
        component: () => import("../../page/monitoring/index.vue"),
        name: "monitoring",
        meta: {
          title: "Monitoring",
          icon: "lock",
        },
      },
    ],
  },
  {
    path: "/share-information",
    redirect: "/share-information/index",
    component: Layout,
    name: "share-information",
    meta: {
      title: "Share Information",
      icon: "lock",
    },
    children: [
      {
        path: "index",
        component: () => import("../../page/share-information/index.vue"),
        name: "share-information",
        meta: {
          title: "Share Information",
          icon: "lock",
        },
      },
    ],
  },
  {
    path: "/user",
    component: Layout,
    redirect: "/user/user",
    name: "USER",
    meta: {
      title: "User",
      icon: "lock",
    },
    children: [
      {
        path: "user",
        component: () => import("../../page/user/user.vue"),
        name: "userList",
        meta: {
          title: "User",
          icon: "lock",
        },
      },
      {
        path: "user-request",
        component: () => import("../../page/user/userRequest.vue"),
        name: "userRequest",
        meta: {
          title: "User Request",
          icon: "lock",
        },
      },
    ],
  },
  {
    path: "/asset",
    component: Layout,
    redirect: "/asset/url",
    name: "asset",
    meta: {
      title: "Asset",
      icon: "lock",
    },
    children: [
      {
        path: "url",
        component: () => import("../../page/asset/url.vue"),
        name: "url",
        meta: {
          title: "URL",
          icon: "lock",
        },
      },
      {
        path: "detail",
        component: () => import("../../page/asset/detail.vue"),
        name: "detail-asset",
        meta: {
          title: "Detail Asset",
          icon: "lock",
        },
      },
    ],
  },
  {
    path: "/sr",
    component: Layout,
    redirect: "/sr/index",
    name: "sr",
    meta: {
      title: "SR",
      icon: "lock",
    },
    children: [
      {
        path: "index",
        component: () => import("../../page/sr/index.vue"),
        name: "SR",
        meta: {
          title: "SR",
          icon: "lock",
        },
      },
    ],
  },
  {
    path: "/system-config",
    component: Layout,
    redirect: "/system-config/address-book",
    name: "system-config",
    meta: {
      title: "System Config",
      icon: "lock",
    },
    children: [
      {
        path: "address-book",
        component: () => import("../../page/system-config/addressBook.vue"),
        name: "address-book",
        meta: {
          title: "Address Book",
          icon: "lock",
        },
      },
    ],
  },
];
