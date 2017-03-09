<template>
        <li class="swiper-slider"
            :item-index="itemIndex"
            :style="{left:itemIndex*100+'%'}"
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
        },
        created(){
            // 在组件模板中，接受父级传递来的数据，将自动遍历
//            this.styleObj.left = this.itemIndex * 100 + '%'
        }

    }
</script>