<template>
    <div>
        <section id="photo_display">
            <div class="pannel_container">
                {{$route.params.tagid}}
                
            </div>
        </section>
    </div>
</template>
<script>
import PhotoPanel from "../components/global/PhotoPanel";
import { EventBus } from "../even_bus.js";
export default {
    data() {
        return {
            
        };
    },
    mounted() {
        EventBus.$emit("nav_change", true);
    },
    destroyed() {
        EventBus.$emit("nav_change", false);
    }
};
</script>