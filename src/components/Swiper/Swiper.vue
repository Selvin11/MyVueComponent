<template>
    <div class="swiper-container">
        <ul class="swiper-wrapper"
            @mouseover="cancelPlay"
            @mouseleave="play">
            <slider-item
                    v-for="(item,index) in items"
                    :count="count"
                    :item="item"
                    ref="slide"
                    :item-index="index"
                    :key="item"
            >
            </slider-item>
        </ul>
        <div class="dot">
            <dot-item
                    v-for="index in count"
                    :item-index="index"
                    :current="current"
                    :key="index"
            >
            </dot-item>
        </div>
    </div>
</template>
<script>
    import sliderItem from "./SliderItem"
    import dotItem from "./DotItem"
    export default{
        name: "swiper",
        components: {
            sliderItem,
            dotItem
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            duration:{
                type: Number,
                required:false
            },
            delay: {
                type: Number,
                required: false,
                default: 2
            },
            isLoop: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        data(){
            return{
                count: this.items.length,
                current: 1,
                loopId: ""
            }
        },
        methods:{
            cancelPlay(){
                 clearInterval(this.loopId);
                 this.loopId = null;
            },
            play(){
                this.loopId = this.interval();
            },
            moveLeft(){
                let slideArr = this.$refs.slide,
                    that = this;
                Velocity(slideArr[0].$el,{
                    left: -100 + '%'
                },{
                    delay: that.delay * that.duration,
                    duration: that.duration
                });

                Velocity(slideArr[1].$el,{
                    left: 0 + '%',
                    zIndex: 2
                },{
                    delay: that.delay * that.duration,
                    duration: that.duration,
                    complete: function () {
                        that.changeCurrent();
                        that.reverseStartEnd();
                    }
                })
            },
            reverseStartEnd(){
                // 同时改变数据和DOM节点的排序
                this.items.push(this.items.shift())
                this.$refs.slide.push(this.$refs.slide.shift())
                return this.items
            },
            interval(){
                return setInterval(() => this.moveLeft(), (this.delay + 2) * this.duration)
            },
            changeCurrent(){
                this.current += 1;
                if(this.current > this.count){
                    this.current = 1;
                }
            }
        },
        mounted(){
            if(this.isLoop){
                this.loopId = this.interval();
            }
        }
    }
</script>

<style>
    .swiper-container {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .swiper-container .swiper-wrapper {
        position: relative;
        height: 300px;
        overflow: hidden;
        transition: all 1s;
        z-index: 0;
    }

    .swiper-container .swiper-slider {
        position: absolute;
        width: 100%;
        margin: 0;
    }

    .swiper-container .swiper-slider > img {
        display: block;
        width: 100%;
        height: auto;
    }

    .dot{
        margin-top: 20px;
        width:100%;
        text-align: center;
    }
    .dot .dot-item{
        display: inline-block;
        margin: 0 10px;
        width:15px;
        height: 15px;
        border-radius: 50%;
        border:1px solid #000;
        background-color: #ffffff;
    }
    .dot .dot-item.active{
        background-color: #000;
    }

</style>