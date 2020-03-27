<template>
    <div id="body">
        <section id="photo_display">
        <photo-panel :images="photos"></photo-panel>      
        </section>
    </div>
</template>
<script>
import { EventBus } from "../even_bus.js";
import PhotoPanel from "../components/global/PhotoPanel";

export default {
    components:{
        PhotoPanel
    },
    mounted(){
        EventBus.$emit("nav_change", true);
    },
    data(){
        return {
            photos:[
                {
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },
                {
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },{
                    title:'车站',
                    date:'2020年3月6日00:39:26',
                    src:'/storage/img/img2.jpg',
                    desc:'This is a photo description',
                },
            ]
        };
    }
}
</script>