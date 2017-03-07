<template>
    <button class="g-button-ripple"
            @click="rippleClick"
            @mouseover="addHover"
            @mouseleave="removeHover"
            :class="{hover:hover}">
        <slot></slot>
        <span class="g-ripple" :class="{animate: ripple_button.animate}"></span>
    </button>
</template>
<script> 
    export default {
        data () {
            return {
                ripple_button: {
                    animate: false,
                    toggle: false
                },
                hover:false
            }
        },
        methods: {
            rippleClick (e) {
                this.ripple_button.animate = true
                let button = e.target
                let ripple = button.querySelector('.g-ripple')
                if (ripple) {
                    var d = Math.max(button.offsetHeight, button.offsetWidth)
                    let x = e.layerX - ripple.offsetWidth / 2
                    let y = e.layerY - ripple.offsetHeight / 2
                    ripple.setAttribute('style', 'height: ' + d + 'px; width: ' + d +
                        'px; top: ' + y + 'px; left: ' + x + 'px;')
                }
                this.$nextTick(() => {
                    // 改变原有根据动画耗时，设置对应的延时函数，会有卡顿，
                    // 改为动画监听，动画结束后重设才重设动画
                    let that = this;
                    if(ripple){
                        ripple.addEventListener('animationend',function(){
                            that.ripple_button.animate = false
                        })
                    }
                    // setTimeout(() => {
                    //     this.ripple_button.animate = false
                    // }, 650)
                })
            },
            addHover(){
                this.hover = true
            },
            removeHover(){
                this.hover = false
            }
        }
    }
</script>
<style>
    .g-button-ripple {
        position: relative;
        display: inline-block;
        min-width: 96px;
        height: 36px;
        padding: 0 16px;
        color: #000;
        overflow: hidden;
        will-change: box-shadow, transform; /* 增强页面渲染性能 */
        transition: box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1);
        cursor: pointer;
        text-align: center;
        line-height: 36px;
        border: none;
        border-radius: 2px;
        outline: none;
        background: transparent;
    }
    .hover {
        background-color: hsla(0, 0%, 62%, .2);
    }
    .g-ripple {
        display: block;
        position: absolute;
        background: hsla(0, 0%, 65%, 0.66);
        border-radius: 100%;
        transform: scale3d(0,0,1);
    }

    .g-ripple.animate {
        animation: ripple 0.65s ease;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale3d(2.5,2.5,1);
        }
    }
</style>