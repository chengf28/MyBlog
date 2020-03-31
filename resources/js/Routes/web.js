import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Home from '../Pages/Home';
import Layout from '../Pages/Layout';
import PhotoTags from "../Pages/PhotoTags";

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
                    'component': PhotoTags
                }, {
                    'path': 'photos/:tagid',
                    'name': 'photos',
                    'component': require('#/Photos').default,
                }
            ]
        }
    ]
});