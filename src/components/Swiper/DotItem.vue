<template>
    <span class="dot-item"
          :class="{active:current==itemIndex?true:false}"
    >
    </span>
</template>

<script>
    export default {
        name: 'DotItem',
        props: {
            itemIndex:{
                type:Number
            },
            current: {
                type: Number,
                required: true
            }
        },
        data(){
            return{

            }
        }
    }
</script>