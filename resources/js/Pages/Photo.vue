<template>
    <div>

    </div>
</template>
<script>
import { EventBus } from "../even_bus.js";
export default {
    mounted(){
        EventBus.$emit("nav_change", true);
    }    
}
</script>