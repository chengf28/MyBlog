<style>
body {
    margin: 0;
}
</style>
<template>
    <div class="content">
        <navigation></navigation>
        <router-view></router-view>
        <icp></icp>
    </div>
</template>
<script>
import Navigation from "../components/global/Navigation";
import Icp from "../components/global/Icp_footer";

export default {
    components: {
        Navigation,
        Icp
    }
};
</script>