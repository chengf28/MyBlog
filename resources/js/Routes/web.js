import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from '../Pages/Home';
import Layout from '../Pages/Layout';
import Photo from "../Pages/Photo";

export default new VueRouter({
    routes: [
        {
            'path': '/',
            'name': 'layout',
            'component': Layout,
            'redirect': {
                'name': 'home'
            },
            'children': [
                {
                    'path': 'home',
                    'name': 'home',
                    'component': Home
                }, {
                    'path': 'photo',
                    'name': 'photo',
                    'component': Photo
                }
            ]
        }
    ]
});