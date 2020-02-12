<style>
body{
    margin: 0;
}
</style>
<template>
    <div>
        <navigation></navigation>
        <router-view></router-view>
    </div>    
</template>
<script>
import Navigation from '../components/global/Navigation';
export default {
    components:{
        Navigation
    }
}
</script>