<template>
    <div>
        <headerTitleComp>
            <template slot="title"><div>我的</div></template>
        </headerTitleComp>
        
        <van-tabbar route v-model="activeeee">
            <van-tabbar-item push to="/" icon="home-o">外卖</van-tabbar-item>
            <van-tabbar-item push to="/search" icon="search">搜索</van-tabbar-item>
            <van-tabbar-item push to="/order" icon="friends-o">订单</van-tabbar-item>
            <van-tabbar-item push to="/mine" icon="setting-o">我的</van-tabbar-item>
          </van-tabbar>
        
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
            activeeee:3,
            password:"",
            username:"",
        }
    },
    methods:{
      onSubmit(){

      }
    }
}
</script>

<style>

</style>