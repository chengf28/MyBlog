<template>
    <div class="pannel_container img_pannel_container">
        <div class="img_pannel" v-for="image in images" :key="image.title">
            <div class="img">
                <img :src="image.src" alt="test" />
            </div>
            <div class="img_desc">
                <div class="img_title">
                    <p>{{image.title}}</p>
                    <span class="time">{{image.date}}</span>
                </div>
                <div class="img_body">{{image.desc}}</div>
            </div>
        </div>
        <!-- <div class="img_pannel">
            <div class="img">
                <img src="/storage/img/img2.jpg" alt="test" />
            </div>
            <div class="img_desc">
                <div class="img_title">
                    <p>车站</p>
                    <span class="time">2020年3月6日00:39:26</span>
                </div>
                <div class="img_body">
                    <p>I am a ready to be your portfolio, telling your stories and short presentations.</p>
                </div>
            </div>
        </div>-->
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: {
        images: Array
    }
};
</script>