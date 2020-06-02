<template>
    <div id="home">
        <section v-for="route in routes" :key="route.name">
            <div class="descriptText">
                <!-- <H2>{{routes[0].meta.name}}</H2> -->
                <!-- <p>{{routes[0].meta.descript}}</p> -->
                <H2>{{route.meta.name}}</H2>
                <p>{{route.meta.descript}}</p>
            </div>
            <!-- <div class="descriptImg">
                <img src="/storage/img/b16.jpg" alt />
            </div> -->
        </section>
    </div>
</template>

<script>
export default {
    mounted() {
        this.routes = this.$router.options.routes[1].children;
        console.log(this.routes);
    },
    data() {
        return {
            routes: []
        };
    }
};
</script>
