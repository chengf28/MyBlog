import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Navigation from '../components/global/Navigation';

import Home from '../Pages/Home';
import Layout from '../Pages/Layout';

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
                }
            ]
        }
    ]
});