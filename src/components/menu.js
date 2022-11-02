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
                parentId: 2
            },
            {
                id: 4,
                label: 'menuitems.accounts.list.count',
                link: '/dashboard/saas',
                parentId: 2
            },
            {
                id: 5,
                label: 'menuitems.accounts.list.customer',
                link: '/khach-hang',
                parentId: 2
            }
        ]
    },
    {
        id: 6,
        label: "menuitems.order.text",
        icon: "bx-upload",
        subItems: [
            {
                id: 7,
                label: 'menuitems.order.list.order',
                link: '/tao-don-le',
                parentId: 6
            },
            {
                id: 8,
                label: 'menuitems.order.list.excelOrder',
                link: '/tao-don-excel',
                parentId: 6
            },
            {
                id: 9,
                label: 'menuitems.order.list.proOrder',
                link: '/tao-don-san-pham',
                parentId: 6
            }
        ]
    }
];