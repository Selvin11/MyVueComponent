<template>
    <li class="swiper-slider" 
      :style="{width: 100/count + '%'}">
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
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>