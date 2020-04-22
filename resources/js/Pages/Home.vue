<template>
    <div id="home">
        <section>
            <nav>
                <!-- <router-link :to="{name:'home'}" class="nav-item">
                    <p>首页</p>
                </router-link>-->
                <div v-for="(router,index) in routers" :key="index" class="nav-item" @mouseover="over">
                    <router-link v-bind:to="router.name" >
                        <p class="nav-name" >{{router.meta.name}}</p>
                        <div class="desc">
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
            console.log(e.target.children[0]);
            
        }
    }
};
</script>
