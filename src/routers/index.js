/**
 * @type {import('react-router').StaticRouter}
 */
export const routes = [
    {
        path: '/test1',
        meta:{
            title:'路由1'
        },
        component: import('../layout/demo')
    },
    {
        path: '/test2',
        meta:{
            title:'路由2'
        },
        component: import('../layout/demo2')
    },
    {
        path: '/test3',
        meta:{
            title:'路由3'
        },
        component: import('../layout/demo3')
    }
];