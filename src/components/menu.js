export const menuItems = [
    {
        id: 1,
        label: "menuitems.accounts.text",
        icon: "bx-user-circle",
        subItems: [
            {
                id: 2,
                label: 'menuitems.accounts.list.userIn4',
                link: '/thong-tin-ca-nhan',
                parentId: 1
            },
            {
                id: 3,
                label: 'menuitems.accounts.list.notice',
                link: '/thong-bao',
                parentId: 1
            },
            {
                id: 4,
                label: 'menuitems.accounts.list.renewPack',
                link: '/gia-han-goi-cuoc',
                parentId: 1
            }
        ]
    },
    {
        id: 5,
        label: "menuitems.count.text",
        icon: "bx-chart",
        link: "/thong-ke"
    },
    {
        id: 6,
        label: "menuitems.MNUser.text",
        icon: "bx-user",
        subItems: [
            {
                id: 7,
                label: 'menuitems.MNUser.list.userList',
                link: '/danh-sach-tai-khoan',
                parentId: 6
            },
            {
                id: 8,
                label: 'menuitems.MNUser.list.creUser',
                link: 'tao-tai-khoan',
                parentId: 6
            },
            {
                id: 9,
                label: 'menuitems.MNUser.list.setSamePrice',
                link: '/cai-dong-gia',
                parentId: 6
            },
        ]
    },
    {
        id: 11,
        label: "menuitems.MNOrder.text",
        icon: "bx-cart",
        subItems: [
            {
                id: 12,
                label: 'menuitems.MNOrder.list.MNOrder',
                link: '/quan-li-don-hang',
                parentId: 11
            },
            {
                id: 13,
                label: 'menuitems.MNOrder.list.searchOrder',
                link: '/tra-cuu-don-hang',
                parentId: 11
            },
            {
                id: 14,
                label: 'menuitems.MNOrder.list.resOrder',
                link: '/quan-li-phan-hoi',
                parentId: 11
            },
            {
                id: 15,
                label: 'menuitems.MNOrder.list.MNOrderByFile',
                link: '/quan-li-don-hang-loat',
                parentId: 11
            },
            {
                id: 16,
                label: 'menuitems.MNOrder.list.impFileFrPartner',
                link: '/quan-li-don-tu-doi-tac',
                parentId: 11
            }
        ]
    },
    {
        id: 16,
        label: "menuitems.MNCODPoOf.text",
        icon: "bx-home",
        subItems: [
            {
                id: 17,
                label: 'menuitems.MNCODPoOf.list.CODShipper',
                link: '/quan-li-cod-shipper',
                parentId: 16
            },
            {
                id: 18,
                label: 'menuitems.MNCODPoOf.list.CODPoOf',
                link: '/quan-li-cod-buu-cuc',
                parentId: 16
            },
            {
                id: 19,
                label: 'menuitems.MNCODPoOf.list.imStock',
                link: '/ton-don-nhap-kho',
                parentId: 16
            },
            {
                id: 20,
                label: 'menuitems.MNCODPoOf.list.checkPro',
                link: '/kiem-ke-hang-hoa',
                parentId: 16
            },
            {
                id: 21,
                label: 'menuitems.MNCODPoOf.list.MNShip',
                link: '/quan-li-giao-hang-shipper',
                parentId: 16
            },
            {
                id: 22,
                label: 'menuitems.MNCODPoOf.list.pickup',
                link: '/pickup',
                parentId: 16
            },
            {
                id: 23,
                label: 'menuitems.MNCODPoOf.list.checkPack',
                link: '/quan-li-kien-hang',
                parentId: 16
            },
            {
                id: 24,
                label: 'menuitems.MNCODPoOf.list.returnOr',
                link: '/quan-li-don-duyet',
                parentId: 16
            }
        ]
    },
    {
        id: 19,
        label: "menuitems.scanCode.text",
        icon: "bx-barcode",
        subItems: [
            {
                id: 20,
                label: 'menuitems.scanCode.list.getPro',
                link: '/quet-lay-hang',
                parentId: 19
            },
            {
                id: 21,
                label: 'menuitems.scanCode.list.scImStock',
                link: '/quet-nhap-kho',
                parentId: 19
            },
            {
                id: 22,
                label: 'menuitems.scanCode.list.delivery',
                link: '/quet-giao-hang',
                parentId: 19
            },
            {
                id: 23,
                label: 'menuitems.scanCode.list.sign',
                link: '/quet-ky-nhan',
                parentId: 19
            },
            {
                id: 24,
                label: 'menuitems.scanCode.list.problemWPro',
                link: '/quet-kien-hang-co-van-de',
                parentId: 19
            },
            {
                id: 25,
                label: 'menuitems.scanCode.list.returnNotic',
                link: '/quet-bao-hoan',
                parentId: 19
            },
            {
                id: 26,
                label: 'menuitems.scanCode.list.scanIn4',
                link: '/quet-thong-tin-kien-hang',
                parentId: 19
            },
            {
                id: 27,
                label: 'menuitems.scanCode.list.giveShipper',
                link: '/quan-li-don-duyet',
                parentId: 19
            }
        ]
    },
    // {
    //     id: 19,
    //     label: "menuitems.reconcilation.text",
    //     icon: "bx-credit-card",
    //     subItems: [
    //         {
    //             id: 20,
    //             label: 'menuitems.reconcilation.list.old',
    //             link: '/phieu-doi-soat',
    //             parentId: 19
    //         },
    //         {
    //             id: 21,
    //             label: 'menuitems.reconcilation.list.new',
    //             link: '/phieu-doi-soat-new',
    //             parentId: 19
    //         }
    //     ]
    // }
];