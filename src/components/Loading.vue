<template>
    <div class="loading"
         v-if="isLoading">
        <span v-for="n in 5"></span>
    </div>
</template>

<script>
    export default {
        name: 'loading',
        props:{
            isLoading:{
                type: Boolean,
                default: true
            }
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss">
    /*loding*/
    .loading {
        width: 150px;
        height: 15px;
        margin: 10px auto;
    }

    .loading span {
        display: inline-block;
        width: 15px;
        height: 100%;
        margin-right: 5px;
        border-radius: 50%;
        background: lightgreen;
        -webkit-animation: load 1.04s ease infinite;
    }

    .loading span:last-child {
        margin-right: 0px;
    }

    @-webkit-keyframes load {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .loading span:nth-child(1) {
        -webkit-animation-delay: 0.13s;
    }

    .loading span:nth-child(2) {
        -webkit-animation-delay: 0.26s;
    }

    .loading span:nth-child(3) {
        -webkit-animation-delay: 0.39s;
    }

    .loading span:nth-child(4) {
        -webkit-animation-delay: 0.52s;
    }

    .loading span:nth-child(5) {
        -webkit-animation-delay: 0.65s;
    }


</style>