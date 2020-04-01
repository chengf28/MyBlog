<template>
    <div>
        <section id="photo_display">
            <div class="test">
                
            </div>
            
            <!-- <div class="img_tags_container">
                <ul>
                    <li v-for="tag in tags" :key="tag.tagId" @click="onClick(tag.tagId)">
                        <img :src="tag.src" alt />
                        <div class="tag_content">
                            <p>{{tag.name}}</p>
                        </div>
                    </li>
                </ul>
            </div> -->
            <!-- <photo-panel :images="photos"></photo-panel>; -->
        </section>
    </div>
</template>
<script>
// import PhotosTag from '../Api/PhotosTag.js';

export default {
    mounted()
    {
        this.$store.dispatch('get');
    },
    data() {
        return {
        };
    },
    methods: {
        onClick(tagid) {
            this.$router.push({name:'photos',params:{tagid}});
        }
    },
    computed:{
        loadStatus() {
            return this.$store.getters.getLoadStatus;
        },
        tags(){
            return this.$store.getters.getTags;
        }
    },
    watch:{
        loadStatus(){
            
        }
    }
};
</script>