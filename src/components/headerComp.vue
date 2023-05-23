<template>
  <div>
    <div class="box">
      <img src="img/搜索.png" @click="toSearch">
      <p>此为当前您的地址</p>
      <div @click="login">登录|注册</div>
    </div>
    <div class="block"></div>
  </div>
</template>

<script>
export default {
  methods:{
    toSearch(){
      this.$router.push("/search")
    },
    login(){
      this.$router.push("/login")
    }
  }
}
</script>

<style lang="scss" scoped>
.block{
  height:1rem;
  width:10rem;
}
.box{
  z-index:10000;
    position:fixed;
    top:0;left:0;
    width:10rem;
    height:1rem;
    background:#3190e8;
    display:flex;
    align-items:center;
    color:white;
    justify-content:space-around;
    img{
        width:.5rem;
        height:.5rem;
        display:block;
    }
    p{
        width:5rem;
        text-align: center;
        font-size:.4rem;
    }
    div{
        font-size:.26rem;
    }
}
</style>