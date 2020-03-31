import PhotosTagApi from "../Api/PhotosTagApi";

export const PhotosTags = {
    state: {
        loadTagsStatus: 0,
        tags: []
    },
    actions: {
        get({ commit }) {
            PhotosTagApi.getAllTags().then(function (response) {
                commit('setLoadStatus', 1);
                if (response.data.code == 1) {
                    commit('setTags', response.data.data);
                    commit('setLoadStatus', 2);
                }
            });
        },
    },
    mutations: {
        setTags(state, tags) {
            state.tags = tags;
        },
        setLoadStatus(state, status) {
            state.loadTagsStatus = status;
        }
    },
    getters: {
        getTags(state) {
            return state.tags;
        },
        getLoadStatus(state) {
            return state.loadTagsStatus;
        }
    }
}