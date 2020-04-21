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
            'name': 'home',
            'component': Home
        },
        {
            'path': 'layout',
            'name': 'layout',
            'component': Layout,
            'children': [
                {
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