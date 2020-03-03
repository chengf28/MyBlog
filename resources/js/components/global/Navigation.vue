<template>
    <nav v-bind:class="navClassName">
        <div class="container">
            <div id="logo">
                <img v-bind:src="imgUrl" alt="NioKu" />
            </div>
            <div class="nav-navbar">
                <a class="nav-item">
                    <p>首页</p>
                </a>
                <a class="nav-item">
                    <p>摄影</p>
                </a>
                <a class="nav-item">
                    <p>文章</p>
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
import { EventBus } from "../../even_bus";
export default {
    data() {
        return {
            navClassName: ["nav"],
            imgUrl:'/storage/img/logo_w.png',
        };
    },
    mounted() {
        EventBus.$on(
            "nav_change",
            function(swt) {
                if (swt) {
                    this.navClassName.push('active');
                    this.imgUrl = '/storage/img/logo.png';
                } else {
                    this.navClassName.pop();
                    this.imgUrl = '/storage/img/logo_w.png';

                }
            }.bind(this)
        );
    }
};
</script>