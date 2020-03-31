
window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');

} catch (e) { }


window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


import Vue from 'vue';

import router from './routes/web.js';
import store from './store.js';


// import ElementUI from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';
import './../sass/app.scss';
import './../sass/iconfont.css';
// Vue.use(ElementUI);

new Vue({
    router,
    store
}).$mount('#app');
