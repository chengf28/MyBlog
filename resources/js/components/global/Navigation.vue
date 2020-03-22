<template>
    <nav v-bind:class="navClassName">
        <div class="container">
            <div id="logo">
                <img v-bind:src="imgUrl" alt="NioKu" />
            </div>
            <div class="nav-navbar">
                <router-link :to="{name:'home'}" class="nav-item">
                    <p>
                        首页
                        <span class="iconfont icon-home"></span>
                    </p>
                </router-link>
                <router-link :to="{name:'photo'}" class="nav-item">
                    <p>
                        摄影
                        <span class="iconfont icon-shexianghei"></span>
                    </p>
                </router-link>
                <a class="nav-item">
                    <p>
                        文章
                        <span class="iconfont icon-icon-test"></span>
                    </p>
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
            imgUrl: "/storage/img/logo_w.png"
        };
    },

    mounted() {
        EventBus.$on(
            "nav_change",
            function(swt) {
                if (swt) {
                    if (this.navClassName.indexOf("active") < 0) {
                        this.navClassName.push("active");
                        this.imgUrl = "/storage/img/logo.png";
                    }
                } else {
                    if (this.navClassName.indexOf("active") >= 0) {
                        this.navClassName.pop();
                        this.imgUrl = "/storage/img/logo_w.png";
                    }
                }
            }.bind(this)
        );
    }
};
</script>