<template>
    <div>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">微信</van-tabbar-item>
            <van-tabbar-item icon="search">好友</van-tabbar-item>
            <van-tabbar-item icon="friends-o">发现</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                active: 0
            }
        },
        watch: {
            active(val) {
                switch (val) {
                    case 0:
                        this.$router.push({name: 'mainList'})
                        break
                    case 1:
                        this.$router.push({name: 'friendsList'})
                        break
                    case 2:
                        this.$router.push({name: 'searchList'})
                        break
                    case 3:
                        this.$router.push({name: 'mineList'})
                        break
                }
            },
        },
    }
</script>