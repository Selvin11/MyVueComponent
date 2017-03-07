<template>
    <div class="swiper-container" >
        <ul class="swiper-wrapper"
            :style="styleObj">
            <slider-item 
                v-for="item,index in items"
                :count="count"
                :current="current"
                :item="item"
                :key="index"
                >
            </slider-item>
        </ul>
    </div>
</template>
<script>
    import sliderItem from "./SliderItem"
    export default{
        name: "swiper",
        components:{
            sliderItem
        },
        props:{
            items:{
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
                    width: "",
                    transform: ""
                }
            }
        },
        computed:{
            reverseItem(){
                let prevItems = this.items,
                    firstItem = prevItems.shift(),
                    lastItem = prevItems.pop();
                prevItems.push(lastItem);
                prevItems.unshift(firstItem);
                return this.items = prevItems;
            }
        },
        methods:{
            skipCurrent(i){
                let skip_i;
                skip_i = this.current + i;
                if (skip_i < 0) {
                    (skip_i = skip_i + this.count)
                }
                if (skip_i >= this.count) {
                    skip_i = skip_i - this.count
                }
                this.current = skip_i
            },
            play(){
                if(this.autoplay){
                    setInterval(()=>{
                        this.skipCurrent(1)
                    },this.delay * 1000)
                }
            }
        },
        watch:{
            // data 对象中无法访问其对象中的其它属性？ 待探究
            current(){
                this.styleObj.transform = "translate3d(-" + (this.current / this.count) * 100 + "%,0,0)";
                if(this.current === this.count - 2){
                    this.reverseItem;
                }
                
            }
        },
        created(){
            
            this.play();
            this.styleObj.width = this.count * 100 + '%';
            this.styleObj.transform = "translate3d(-" + (this.current / this.count) * 100 + "%,0,0)";
        }
    }
</script>

<style lang="scss">
    .swiper-container {
      overflow: hidden;
      width: 100%;
      position: relative;
    }
    .swiper-container .swiper-wrapper {
      height: auto;
      overflow: hidden;
      position: relative;
      left: 0;
      transition: all 1s;
    }
    .swiper-container .swiper-slider {
      display: inline-block;
      height: auto;
      margin:0;
    }
    .swiper-container .swiper-slider > img {
      display: block;
      height: auto;
      width: 100%;
    }
</style>