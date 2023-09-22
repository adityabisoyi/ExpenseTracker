import { transactions,trend,expenses,dashboard } from "./icons"
export const menuItems = [

    {
        id:1,
        title:'Dashboard',
        icon:dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/recent",     
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/incomes",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/expenses",
    },
]