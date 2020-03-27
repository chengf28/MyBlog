<template>
    <div id="body">
        <section id="welcome" ref="welcome">
            <div>
                <h2>
                    天才只
                    <b>尿裤</b>
                    <span>
                        <b>Nio Ku</b>
                    </span>
                </h2>
            </div>
        </section>
        <section id="photo_display">
            <div class="container">
                <photo-panel :images="images"></photo-panel>
            </div>
        </section>
        <section id="content_display">
            <div class="container">
                <essay-panel :essays="essays"></essay-panel>
            </div>
        </section>
    </div>
</template>

<script>
import { EventBus } from "../even_bus.js";
import _ from "lodash";
import PhotoPanel from "../components/global/PhotoPanel";
import EssayPanel from "../components/global/EssayPanel";

export default {
    components: {
        PhotoPanel,
        EssayPanel
    },
    data() {
        return {
            sectionHeight: 0,
            maxScroll: 0,
            isChange: false,
            images: [
                {
                    title: "图1",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img1.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图2",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img2.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图1",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img1.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图2",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img2.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图1",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img1.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图2",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img2.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图1",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img1.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图2",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img2.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图1",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img1.jpg",
                    desc: "This is a photo description"
                },
                {
                    title: "图2",
                    date: "2020年3月6日00:39:26",
                    src: "/storage/img/img2.jpg",
                    desc: "This is a photo description"
                }
            ],
            essays: [
                {
                    title: "About Me",
                    date: "2020年3月6日00:39:26",
                    content: `<p>This can be an about section.</p>
                <p>Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>`
                }, {
                    title: "About Me",
                    date: "2020年3月6日00:39:26",
                    content: `<p>This can be an about section.</p>
                <p>Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>`
                }

            ]
        };
    },
    mounted() {
        EventBus.$emit("nav_change", false);
        this.$refs["welcome"].style.height = window.innerHeight + "px";
        this.sectionHeight = window.innerHeight - 100;
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