<template>
        <li class="swiper-slider"
            :item-index="itemIndex"
            :style="{left:itemIndex*100+'%',zIndex:0}"
        >
            <img :src="item.src" :alt="item.alt">
        </li>
</template>

<script>
    export default {
        name: 'SliderItem',
        props: {
            count: {
                type: Number,
                required: true
            },
            itemIndex:{
                type:Number
            },
            item: {
                type: Object,
                required: true
            },
            styleObj:{

            }
        },
        data(){
          return{

          }
        }
    }
</script>