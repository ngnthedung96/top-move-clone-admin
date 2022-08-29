export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: "menuitems.dashboards.text",
        icon: "bx-home-circle",
        badge: {
            variant: "info",
            text: "menuitems.dashboards.badge"
        },
        subItems: [
            {
                id: 3,
                label: "menuitems.dashboards.list.default",
                link: "/",
                parentId: 2
            },
            {
                id: 4,
                label: "menuitems.dashboards.list.saas",
                link: "/dashboard/saas",
                parentId: 2
            },
            {
                id: 5,
                label: "menuitems.dashboards.list.crypto",
                link: "/dashboard/crypto",
                parentId: 2
            },
            {
                id: 6,
                label: "menuitems.dashboards.list.blog",
                link: "/dashboard/blog",
                parentId: 2
            }
        ]
    },
    {
        id: 7,
        isLayout: true
    },
    {
        id: 8,
        label: "menuitems.apps.text",
        isTitle: true
    },
    {
        id: 12,
        label: "menuitems.userrole.text",
        icon: "bx-store",
        subItems: [
            {
                id: 13,
                label: "menuitems.userrole.list.user",
                link: "/users/list",
                parentId: 12
            },
            {
                id: 14,
                label: "menuitems.userrole.list.role",
                link: "/roles/list",
                parentId: 12
            },
            {
                id: 14,
                label: "menuitems.userrole.list.resources",
                link: "/resources/list",
                parentId: 12
            },
            {
                id: 14,
                label: "menuitems.userrole.list.permissions",
                link: "/permissions/list",
                parentId: 12
            },
        ]
    },
];