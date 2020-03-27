<template>
    <div class="pannel_container">
        <div class="essay_pannel" v-for="essay in essays" :key="essay.title">
            <div class="essay_title">
                <p>{{essay.title}}</p>
                <span class="time">{{essay.date}}</span>
            </div>
            <div class="essay_body" v-html="essay.content"></div>
            <div class="essay_foot">
                <a class="button" href="#">
                    <span class="iconfont icon-right"></span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        essays: Array
    }
};
</script>