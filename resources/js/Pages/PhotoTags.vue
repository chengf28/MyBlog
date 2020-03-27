<template>
    <div>
        <section id="photo_display">
            <div class="img_tags_container">
                <ul>
                    <li v-for="(tag,index) in tags" :key="index">
                        <img :src="tag.src" alt />
                        <div class="tag_content">
                            <p>{{tag.name}}</p>
                        </div>
                    </li>
                    
                   
                </ul>
            </div>
            <!-- <photo-panel :images="photos"></photo-panel>; -->
        </section>
    </div>
</template>
<script>

export default {
    data() {
        return {
            tags:[
                {
                    name:'食物',
                    src:'/storage/img/img1.jpg',
                    url:''
                },
                {
                    name:'风景',
                    src:'/storage/img/img2.jpg',
                    url:''
                },
                {
                    name:'抽象',
                    src:'/storage/img/img1.jpg',
                    url:''
                }
            ]
        };
    }
};
</script>