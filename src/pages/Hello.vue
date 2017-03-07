<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
            <li><router-link to="/paging">分页组件</router-link></li>
            <li><router-link to="/loading">加载组件</router-link></li>
            <li><router-link to="/button">按钮组件</router-link></li>
            <li><router-link to="/swiper">轮播组件</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: '',
                show: true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;

    li {
        // display: inline-block;
        margin: 10px;
    }

    }

    a {
        color: #42b983;
        text-decoration: none;
    }


</style>
