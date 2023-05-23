<template>
    <div>
        <van-tabbar route v-model="activeeee">
            <van-tabbar-item push to="/" icon="home-o">外卖</van-tabbar-item>
            <van-tabbar-item push to="/search" icon="search">搜索</van-tabbar-item>
            <van-tabbar-item push to="/order" icon="friends-o">订单</van-tabbar-item>
            <van-tabbar-item push to="/mine" icon="setting-o">我的</van-tabbar-item>
          </van-tabbar>
        <headerTitleComp>
            <template slot="title"><div>搜索</div></template>
        </headerTitleComp>
        <!-- <van-nav-bar
            title="标题"
            left-arrow
            @click-left="onClickLeft"
            style="background:#3190e8;color:#fff!important;"
            :placeholder="placeholder"
            /> -->
        我是搜索
    </div>
</template>

<script>
import headerTitleComp from '../components/headerTitleComp.vue';
export default {
    components:{
        headerTitleComp,
    },
    data(){
        return {
            placeholder:true,
            activeeee:1,
        }
    },
    methods:{
        onClickLeft(){
            this.$router.back();
        }
    }
}
</script>

<style>

</style>