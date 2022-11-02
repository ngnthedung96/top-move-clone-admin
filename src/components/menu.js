export const menuItems = [
    {
        id: 1,
        label: "menuitems.live.text",
        icon: "bx-chart",
        link: "/"

    },
    {
        id: 2,
        label: "menuitems.accounts.text",
        icon: "bx-user-circle",
        subItems: [
            {
                id: 3,
                label: 'menuitems.accounts.list.userIn4',
                link: '/thong-tin-ca-nhan',
                parentId: 1
            },
            {
                id: 4,
                label: 'menuitems.accounts.list.count',
                link: '/dashboard/saas',
                parentId: 1
            },
            {
                id: 5,
                label: 'menuitems.accounts.list.customer',
                link: '/dashboard/crypto',
                parentId: 1
            }
        ]
    }
];