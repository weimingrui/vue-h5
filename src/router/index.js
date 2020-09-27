/*
 * @Author: Arthur
 * @Date: 2020-09-27 16:45:16
 * @LastEditors: Arthur
 * @LastEditTime: 2020-09-27 17:04:36
 * @Description: file content
 */

const Router = [
    {
        path: '/',
        component:()=> import(/* webpackChunkName: "index" */'@/pages/Index/index.vue')
    }
];
export default Router;