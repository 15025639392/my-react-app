/**
 * @type {import('react-router').StaticRouter}
 */
export const routes = [
    {
        path: '/test1',
        meta:{
            title:'test1'
        },
        component: import('../layout/demo')
    },
    {
        path: '/test2',
        meta:{
            title:'test2'
        },
        component: import('../layout/demo2')
    },
    {
        path: '/test3',
        meta:{
            title:'test3'
        },
        component: import('../layout/demo3')
    }
];