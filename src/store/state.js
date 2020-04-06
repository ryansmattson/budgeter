export default {
    categories: {
        '1': {
            name: 'Utilities',
            budget: 80,
            rollover: 56
        },
        '2': {
            name: 'Groceries',
            budget: 450,
            rollover: 0
        },
        '3': {
            name: 'Entertainment',
            budget: 50,
            rollover: 12
        }
    },
    transactions: {
        '1': {
            amount: 4.35,
            category_id: 1,
            type: 'expense'
        },
        '2': {
            amount: 45.34,
            category_id: 1,
            type: 'expense'
        },
        '3': {
            amount: 12.98,
            category_id: 2,
            type: 'expense'
        },
        '4': {
            amount: 78.3,
            category_id: 3,
            type: 'expense'
        },
        '5': {
            amount: 345.43,
            category_id: 3,
            type: 'expense'
        },
    },

    // categories: [
    //     {
    //         name: 'Utilities',
    //         sort: 1,
    //         budget: 85,
    //         rollover: 6,
    //         expenses: [
    //             {
    //                 id: 1,
    //                 value: 13.38,
    //                 date: 10
    //             },
    //             {
    //                 id: 2,
    //                 value: 3.65,
    //                 date: 11
    //             },
    //             {
    //                 id: 3,
    //                 value: 25.23,
    //                 date: 12
    //             },
    //             {
    //                 id: 4,
    //                 value: 7.10,
    //                 date: 13
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Groceries',
    //         sort: 2,
    //         budget: 450,
    //         rollover: 0,
    //         expenses: [
    //             {
    //                 id: 1,
    //                 value: 28,
    //                 date: 14
    //             },
    //             {
    //                 id: 2,
    //                 value: 98.97,
    //                 date: 20
    //             },
    //             {
    //                 id: 3,
    //                 value: 34.5,
    //                 date: 21
    //             },
    //             {
    //                 id: 4,
    //                 value: 9.43,
    //                 date: 27
    //             }
    //         ]
    //     }
    // ]
}