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
    },
    {
        id: 10,
        label: "menuitems.MNOrder.text",
        icon: "bx-cart",
        subItems: [
            {
                id: 11,
                label: 'menuitems.MNOrder.list.MNOrder',
                link: '/quan-li-don-hang',
                parentId: 10
            },
            {
                id: 12,
                label: 'menuitems.MNOrder.list.resOrder',
                link: '/quan-li-phan-hoi',
                parentId: 10
            },
            {
                id: 13,
                label: 'menuitems.MNOrder.list.MNOrderByFile',
                link: '/quan-li-don-hang-loat',
                parentId: 10
            },
            {
                id: 14,
                label: 'menuitems.MNOrder.list.failOrder',
                link: '/thong-bao-don-fail',
                parentId: 10
            },
            {
                id: 15,
                label: 'menuitems.MNOrder.list.storeOrder',
                link: '/kho-hang',
                parentId: 10
            }
        ]
    },
    {
        id: 19,
        label: "menuitems.reconcilation.text",
        icon: "bx-credit-card",
        subItems: [
            {
                id: 20,
                label: 'menuitems.reconcilation.list.old',
                link: '/phieu-doi-soat',
                parentId: 19
            },
            {
                id: 21,
                label: 'menuitems.reconcilation.list.new',
                link: '/phieu-doi-soat-new',
                parentId: 19
            }
        ]
    }
];