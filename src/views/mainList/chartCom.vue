<template>
    <van-panel>
        <div class="demo-preview"><img src="https://img.yzcdn.cn/vant/logo.png">
            <div class="demo-content"><h3>关于 Vant</h3>
                <p>Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</p></div>
        </div>
    </van-panel>
</template>
<style lang="scss">
    .demo-preview {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        padding: 0 16px;
        img {
            -webkit-flex-shrink: 0;
            flex-shrink: 0;
            width: 64px;
            height: 64px;
            margin-right: 16px;
        }
        .demo-content {
            padding-top: 6px;
            h3 {
                margin: 0;
                font-size: 18px;
                line-height: 20px;
            }
            p {
                margin: 13px 0 0 0;
                font-size: 14px;
                line-height: 20px;width: 100%;
                overflow: hidden;text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
        }
    }
</style>