<template>
    <div>
        <van-tabbar route v-model="activeeee">
            <van-tabbar-item push to="/" icon="home-o">外卖</van-tabbar-item>
            <van-tabbar-item push to="/search" icon="search">搜索</van-tabbar-item>
            <van-tabbar-item push to="/order" icon="friends-o">订单</van-tabbar-item>
            <van-tabbar-item push to="/mine" icon="setting-o">我的</van-tabbar-item>
          </van-tabbar>
        <headerTitleComp>
            <template slot="title"><div>订单</div></template>
        </headerTitleComp>
    </div>
</template>

<script>
import headerTitleComp from '@/components/headerTitleComp.vue';
export default {
    components:{
        headerTitleComp,
    },
    data(){
        return {
            activeeee:2,
        }
    }
}
</script>

<style>

</style>