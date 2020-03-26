<template>
    <div id="body">
        <section id="photo_display">
            <div class="container pannel_container img_pannel_container">
                <div class="img_pannel" v-for="photo in photos" :key="photo.name">
                    <div class="img">
                        <img :src="photo.img" alt />
                    </div>
                    <div class="img_desc">
                        <div class="img_title">
                            <p>{{photo.name}}</p>
                            <span class="time">{{photo.time}}</span>
                        </div>
                        <div class="img_body">{{photo.description}}</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { EventBus } from "../even_bus.js";
export default {
    mounted(){
        EventBus.$emit("nav_change", true);
    },
    data(){
        return {
            photos:[
                {
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },
                {
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },{
                    name:'车站',
                    time:'2020年3月6日00:39:26',
                    img:'/storage/img/img2.jpg',
                    description:'This is a photo description',
                },
            ]
        };
    }
}
</script>