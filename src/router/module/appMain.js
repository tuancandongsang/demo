export const appMainRouter = [
  {
    path: "/",
    redirect: "/monitoring",
    component: () => import("../../layout/index.vue"),
    name: "",
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
  // {
  //   path: "/share-information",
  //   component: () => import("../../layout/index.vue"),
  //   name: "share-information",
  //   children: [
  //     {
  //       component: () => import("../../page/share-information/index.vue"),
  //       name: "share-information",
  //       meta: {
  //         title: "Share Information",
  //         icon: "lock",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/user",
  //   component: () => import("../../layout/index.vue"),
  //   redirect: "/user/user",
  //   name: "user",
  //   meta: {
  //     title: "USER",
  //     icon: "lock",
  //   },
  //   children: [
  //     {
  //       path: "user",
  //       component: () => import("../../page/user/user.vue"),
  //       name: "userList",
  //       meta: {
  //         title: "USER",
  //         icon: "lock",
  //       },
  //     },
  //     {
  //       path: "user-request",
  //       component: () => import("../../page/user/userRequest.vue"),
  //       name: "userRequest",
  //       meta: {
  //         title: "user Request",
  //         icon: "lock",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/asset",
  //   component: () => import("../../layout/index.vue"),
  //   name: "asset",
  //   meta: {
  //     title: "Asset",
  //     icon: "lock",
  //   },
  //   children: [
  //     {
  //       path: "url",
  //       component: () => import("../../page/asset/url.vue"),
  //       name: "url",
  //       meta: {
  //         title: "URL",
  //         icon: "lock",
  //       },
  //     },
  //     {
  //       path: "detail",
  //       component: () => import("../../page/asset/detail.vue"),
  //       name: "detail-asset",
  //       meta: {
  //         title: "Detail Asset",
  //         icon: "lock",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/sr",
  //   component: () => import("../../layout/index.vue"),
  //   name: "sr",
  //   meta: {
  //     title: "SR",
  //     icon: "lock",
  //   },
  // },
  // {
  //   path: "/system-config",
  //   component: () => import("../../layout/index.vue"),
  //   name: "system-config",
  //   meta: {
  //     title: "System Config",
  //     icon: "lock",
  //   },
  //   children: [
  //     {
  //       path: "address-book",
  //       component: () => import("../../page/system-config/addressBook.vue"),
  //       name: "address-book",
  //       meta: {
  //         title: "Address Book",
  //         icon: "lock",
  //       },
  //     },
  //   ],
  // },
];

// {
//   path: "/",
//   redirect: "/home",
//   component: () => import("../../layout/index.vue"),
//   children: [
//     {
//       path: "/home",
//       component: () => import("../../page/home/index.vue"),
//       name: "home",
//     },
//     {
//       path: "/monitoring",
//       component: () => import("../../page/monitoring/index.vue"),
//       name: "monitoring",
//       meta: {
//         title: "Monitoring",
//         icon: "lock",
//       },
//     },
//     {
//       path: "/share-information",
//       component: () => import("../../page/share-information/index.vue"),
//       name: "share-information",
//       meta: {
//         title: "Share Information",
//         icon: "lock",
//       },
//     },
//     {
//       path: "/user",
//       // component: () => import("../../page/user/index.vue"),
//       redirect: "/user/user",
//       name: "user",
//       meta: {
//         title: "USER",
//         icon: "lock",
//       },
//       children: [
//         {
//           path: "user",
//           component: () => import("../../page/user/user.vue"),
//           name: "userList",
//           meta: {
//             title: "USER",
//             icon: "lock",
//           },
//         },
//         {
//           path: "user-request",
//           component: () => import("../../page/user/userRequest.vue"),
//           name: "userRequest",
//           meta: {
//             title: "user Request",
//             icon: "lock",
//           },
//         },
//       ],
//     },
//     {
//       path: "/asset",
//       redirect: "/asset/detail",
//       name: "asset",
//       meta: {
//         title: "Asset",
//         icon: "lock",
//       },
//       children: [
//         {
//           path: "url",
//           component: () => import("../../page/asset/url.vue"),
//           name: "url",
//           meta: {
//             title: "URL",
//             icon: "lock",
//           },
//         },
//         {
//           path: "detail",
//           component: () => import("../../page/asset/detail.vue"),
//           name: "detail-asset",
//           meta: {
//             title: "Detail Asset",
//             icon: "lock",
//           },
//         },
//       ],
//     },
//     {
//       path: "/sr",
//       component: () => import("../../page/sr/index.vue"),
//       name: "sr",
//       meta: {
//         title: "SR",
//         icon: "lock",
//       },
//     },
//     {
//       path: "/system-config",
//       redirect: "/system-config/address-book",
//       name: "system-config",
//       meta: {
//         title: "System Config",
//         icon: "lock",
//       },
//       children: [
//         {
//           path: "address-book",
//           component: () => import("../../page/system-config/addressBook.vue"),
//           name: "address-book",
//           meta: {
//             title: "Address Book",
//             icon: "lock",
//           },
//         },
//       ],
//     },
//     // {
//     //   path: '/:id',
//     //   component: Detail,
//     //   props: true,
//     // },
//   ],
// },
// ];
