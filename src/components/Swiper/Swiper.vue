<template>
    <div class="swiper-container">
        <!--<ul class="swiper-wrapper">-->
            <transition-group
                tag="ul"
                class="swiper-wrapper"
                name="swiper-slider"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                mode="in-out"
                >
                <slider-item
                        v-for="item,index in items"
                        :count="count"
                        :item="item"
                        ref="slide"
                        :item-index="index"
                        :key="item"
                >
                </slider-item>
            </transition-group>
        <!--</ul>-->
        <button @click="reverseStartEnd">
            测试
        </button>
    </div>
</template>
<script>
    import sliderItem from "./SliderItem"
    export default{
        name: "swiper",
        components: {
            sliderItem
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            pause: {
                type: Boolean,
                required: false,
                default: true
            },
            autoplay: {
                type: Boolean,
                required: false,
                default: true
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
                current: 0,
                styleObj:{
                    left: ""
                }
            }
        },
        computed: {

        },
        methods:{
            beforeEnter(el){
                console.log(el)
            },
            enter(el,done){
                console.log(2)
                done()
            },
            afterEnter(){
//                this.reverseStartEnd()
                console.log(3)
            },
            moveLeft(){

            },
            reverseStartEnd(){
                let start = this.items.shift()
                this.items.push(start)
                return this.items
            }
        },
        watch: {
            // data 对象中无法访问其对象中的其它属性？ 待探究
            items(){
                let slideArr = this.$refs.slide,
                    that = this;
                Velocity(slideArr[0].$el,{
                    left: -100 + '%'
                },{
                    delay: 1000,
                    duration: 1000
                });

                Velocity(slideArr[1].$el,{
                    left: -100 + '%'
                },{
                    delay: 1000,
                    duration: 1000,
                    complete: function () {
                        that.reverseStartEnd()
                    }
                })
            }
        },
        created(){

        },
        mounted(){
            let slideArr = this.$refs.slide,
                that = this;
            console.log(slideArr[0].$el)
//            setTimeout(()=>slideArr[0].$el.style.left = "-100%",1000)
//            setTimeout(()=>slideArr[1].$el.style.left = "0%",1000)
            Velocity(slideArr[0].$el,{
                left: -100 + '%'
            },{
                delay: 1000,
                duration: 1000
            });

            Velocity(slideArr[1].$el,{
                left: -100 + '%'
            },{
                delay: 1000,
                duration: 1000,
                complete: function () {
                    that.reverseStartEnd()
                }
            })

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
    /*.swiper-slider-enter {*/
        /*opacity: 0;*/
    /*}*/
    /*.swiper-slider-enter-to{*/
        /*opacity: 0;*/
    /*}*/
    /*.swiper-slider-leave{*/
        /*opacity: 0;*/
    /*}*/
    /*.swiper-slider-leave-to{*/

    /*}*/
    /*.swiper-slider-move {*/
        /*transition: all 1s;*/
    /*}*/

    /*.swiper-slider-enter-active, .swiper-slider-leave-active {*/
        /*transition: all 1s;*/
    /*}*/

</style>