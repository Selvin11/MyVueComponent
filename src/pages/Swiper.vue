<template>
    <swiper :items="items">
    </swiper>
</template>
<script>
    import swiper from "@/components/Swiper/Swiper"
    export default{
        components:{
            swiper
        },
        data(){
            return{
                items: [
                    {
                        src: 'http://placehold.it/350x150/999999/000000',
                        alt: 'images-1'
                    },
                    {
                        src: 'http://placehold.it/350x150/eeeeee/c90023',
                        alt: 'images-2'
                    },
                    {
                        src: 'http://placehold.it/350x150/333333/eeeeee',
                        alt: 'images-3'
                    }
                ]
            }
        }
    }
</script>
