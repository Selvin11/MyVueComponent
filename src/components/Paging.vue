<template>
    <div class="paging">
        <div class="post-wrap"
             v-for="post in posts">
            {{post.title}}
        </div>
        <ul class="page-wrap">
            <!-- loading 加载效果组件-->
            <loading :is-loading="loading"></loading>

            <li class="page-item"
                v-for="(page,index) in pages"
                :class="{active:page.isActive}"
                @click="getPages(index)">
                {{page.num}}
            </li>
        </ul>
    </div>
</template>

<script>
    import loading from "./Loading"
    export default {
        name: 'paging',
        components: {
            loading //加载效果组件
        },
        data () {
            return {
                loading: true, // 获取数据时的加载状态
                allPosts: [], // 存储总数据
                posts: [],  // 存储单页数据
                colNum: 1, // 每页显示数据数量
                pages: [] // 页数
            }
        },
        created(){
            let that = this
            this.$http.get('http://localhost:8888/res/api/list')
                .then(function (res) {
                    console.log(res.data)
                    let postLength = res.data.length, // 所有数据数
                        forNum = Math.ceil(postLength / that.colNum) // 分页后单页数据数量
                    // 获取第一页数据
                    for (let i = 1; i <= forNum; i++) {
                        that.pages.push({
                            num: i,
                            isActive: false
                        })
                    }
                    that.pages[0].isActive = true
                    that.loading = false

                    that.allPosts = res.data
                    that.posts = res.data.slice(0, that.colNum)

                })
                .catch(function (err) {
                    // console.log(err)
                    // 模拟数据
                    let data = [
                        {
                            title: "第一条数据"
                        },
                        {
                            title: "第二条数据"
                        },
                        {
                            title: "第三条数据"
                        }
                    ]
                    for (let i = 1; i <= 3; i++) {
                        that.pages.push({
                            num: i,
                            isActive: false
                        })
                    }
                    that.pages[0].isActive = true
                    that.loading = false

                    that.allPosts = data
                    that.posts = data.slice(0, that.colNum)
                })
        },
        methods: {
            getPages(index){
                // 点击后，当前item增加active类名，其余隐藏
                this.pages.map((item, key) => key === index ? item.isActive = true : item.isActive = false)
                // 数据分页
                let postLength = this.allPosts.length,
                    prevPostNum = this.colNum

                if (index === postLength - 1) {
                    this.posts = this.allPosts.slice(index * prevPostNum)
                } else {
                    this.posts = this.allPosts.slice(index * prevPostNum, (index + 1) * prevPostNum)
                }

            }
        }
    }
</script>

<style lang="scss">
    .post-wrap {
        height: 50px;
    }

    .page-wrap {
        width: 50vw;
        padding: 10px 0;
        margin: auto;
        list-style: none;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
    }

    .page-item {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin: 0 10px;
        border-radius: 5px;
        box-sizing: border-box;
        &.active {
            color: #fff;
            background-color: #42b983;
        }
    }

</style>