import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import {PhotosTags} from './Modules/PhotoTags.js';

export default new Vuex.Store({
    modules: {
        PhotosTags
    }
});