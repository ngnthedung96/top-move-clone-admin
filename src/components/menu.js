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
        link: "/thongg-ke"
    },
    {
        id: 6,
        label: "menuitems.MNUser.text",
        icon: "bx-cart",
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
            {
                id: 10,
                label: 'menuitems.MNUser.list.userBankAcc',
                link: '',
                parentId: 6
            }
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