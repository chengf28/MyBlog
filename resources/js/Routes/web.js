import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('#/Home').default,
            meta: {
                name: '开始',
                descript: '起点也是终点,开始就输了'
            }
        },
        {
            path: '/layout',
            name: 'layout',
            component: require('#/Layout').default,
            redirect: 'home',
            children: [
                {
                    path: 'code',
                    name: 'code',
                    component: require('#/PhotoTags').default,
                    meta: {
                        name: '零&一',
                        descript: '编程的世界,非零即一'
                    }
                },
                {
                    path: 'photo',
                    name: 'photo',
                    component: require('#/PhotoTags').default,
                    meta: {
                        name: '光线 、影 、色彩',
                        descript: '让时间停下来'
                    }
                },
                {
                    path: 'paper',
                    name: 'paper',
                    component: require('#/PhotoTags').default,
                    meta: {
                        name: '二十一克',
                        descript: '据说人的灵魂有二十一克'
                    }
                }
            ]
        }
    ]
});