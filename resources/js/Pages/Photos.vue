<template>
    <div>
        <section id="photo_display">
            {{$route.params.tagid}}
            <photo-panel :images="photos"></photo-panel>;
        </section>
    </div>
</template>
<script>
import PhotoPanel from '../components/global/PhotoPanel';
export default {
    components:{
        PhotoPanel
    }
    ,data() {
        return {
            photos:[
                {
                    
                }
            ]
        };
    }
};
</script>