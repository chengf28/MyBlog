<template>
    <div id="home">
        <section>
            <nav>
                <!-- <router-link :to="{name:'home'}" class="nav-item">
                    <p>首页</p>
                </router-link>-->
                <div
                    v-for="(router,index) in routers"
                    :key="index"
                    class="nav-item"
                    @mouseover="over"
                    @mouseout="out"
                >
                    <router-link v-bind:to="router.name">
                        <p class="nav-name">{{router.meta.name}}</p>
                        <div class="desc nav-hide">
                            <p class="nav-desc">{{router.meta.descript}}</p>
                        </div>
                    </router-link>
                </div>
            </nav>
        </section>
        <!-- <div class="banner">
            <div>
                天才只尿裤
                <span>NioKu</span>
            </div>
        </div>-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            routers: []
        };
    },
    mounted() {
        this.routers = this.$router.options.routes[1].children;
    },
    methods: {
        over(e) {
            if (!e.target || !e.target.children) {
                return;
            }
            const ele = e.target.children[0].children;
            for (let i = 0; i < ele.length; i++) {
                const cls = ele[i].classList;
                if (cls.contains("nav-hide")) {
                    cls.remove("nav-hide");
                } else {
                    cls.add("nav-hide");
                }
            }
        },
        out(e) {
            if (!e.target || !e.target.children) {
                return;
            }
            const ele = e.target.offsetParent.children[0].children;
            for (let i = 0; i < ele.length; i++) {
                const cls = ele[i].classList;
                if (cls.contains("nav-hide")) {
                    cls.remove("nav-hide");
                } else {
                    cls.add("nav-hide");
                }
            }
        }
    }
};
</script>
