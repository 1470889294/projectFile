<template>
  <div class="home">
    <headerComp></headerComp>
    <div class="banner_container">
      <div class="banner_box">
        <div v-for="item,index in swiperList" :key="index" class="banner_item">
          <img :src="item.image_url" >
          <p style="font-size:.3rem;">{{item.title}}</p>
        </div>
      </div>
    </div>
    <van-tabbar route v-model="activeeee">
      <van-tabbar-item push to="/" icon="home-o">外卖</van-tabbar-item>
      <van-tabbar-item push to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item push to="/order" icon="friends-o">订单</van-tabbar-item>
      <van-tabbar-item push to="/mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    <div class="fjsj">
      <p class="header_title">附近商家</p>
      <goods v-for="item,index in list" :key="index" :item="item"></goods>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerComp from '@/components/headerComp.vue';
import goods from '@/components/goods.vue';
export default {
  name: 'HomeView',
  components: {
    headerComp,
    goods,
    
  },
  data(){
    return{
      active:0,
      list:[],
      swiperList:[],
      activeeee:0,
    }
  },
  methods:{
    
  },
  async mounted(){
    this.$router.push("/city")
    const PATH = "https://elm.cangdu.org/img/";
    const PATH2 = "https://fuss10.elemecdn.com";
    let res = await this.$http("goodsList.json")
    this.list = res.data.filter(item=>{
      return item.image_path = PATH + item.image_path;
    });
    let res2 = await this.$http("banner.json")
    this.swiperList = res2.data.filter(item=>{
      return item.image_url = PATH2 + item.image_url;
    })
    // let a = await this.$http("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=9")
    // console.log(a);
    // console.log(res);
  }
}


</script>
<style lang="scss" scoped>
.banner_container{
  width:10rem;
  height:4.5rem;
  overflow-x:scroll;
  .banner_box{
    width:20rem;
    height:4.5rem;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    .banner_item{
      width:2rem;
      height:2rem;
      margin:.1rem .2rem;
      text-align:center;
      img{
        width:1.5rem;
        height:1.5rem;
        vertical-align:middle;
      }
    }
  }
}
.fjsj{
  margin-bottom:1rem;
}
</style>