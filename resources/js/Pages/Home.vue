<template>
    <div id="body">
        <section>
            <div id="welcome" ref="welcome">
                <h2>
                    天才只<b>尿裤</b>
                    <span><b>Nio Ku</b></span>
                </h2>
            </div>
        </section>
        <section>
            <div class="container">
                asd
            </div>
        </section>
        <section>asd</section>
    </div>
</template>

<script>
import { EventBus } from "../even_bus.js";
import _ from "lodash";
export default {
    data() {
        return {
            sectionHeight: 0,
            maxScroll: 0,
            isChange: false
        };
    },
    mounted() {
        this.sectionHeight = this.$refs.welcome.clientHeight - 100;
        window.onscroll = function() {
            this.handleScroll(
                document.body.scrollTop || document.documentElement.scrollTop
            );
        }.bind(this);
    },
    methods: {
        handleScroll: function(scroll) {
            if (scroll >= this.sectionHeight) {
                if (!this.isChange) {
                    this.isChange = !this.isChange;
                    EventBus.$emit("nav_change", this.isChange);
                }
            } else {
                if (this.isChange) {
                    this.isChange = !this.isChange;
                    EventBus.$emit("nav_change", this.isChange);
                }
            }
        }
    }
};
</script>