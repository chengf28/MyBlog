import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);



export default new VueRouter({
    routes: [
        {
            'path': '/',
            'name': 'home',
            'component': require('#/Home').default
        },
        {
            'path': 'layout',
            'name': 'layout',
            'component': require('#/Layout').default,
            'children': [
                {
                
                    'path': 'photo',
                    'name': 'photo',
                    'component': require('#/PhotoTags').default,
                    'meta': {
                        'name': '光线 、影 、色彩',
                        'descript':'随便乱拍'
                    }
                    // }, {
                    //     'path': 'photos/:tagid',
                    //     'name': 'photos',
                    //     'component': require('#/Photos').default,
                    // },{
                }, {
                    'path': 'code',
                    'name': 'code',
                    'component': require('#/PhotoTags').default,
                    'meta': {
                        'name': '零与一',
                        'descript':'编程的世界,其实就是简单的0与1'
                    }
                },
                {
                    'path': 'paper',
                    'name': 'paper',
                    'component': require('#/PhotoTags').default,
                    'meta': {
                        'name': '二十一克',
                        'descript':'人的灵魂只有21克'
                    }
                }
            ]
        }
    ]
});