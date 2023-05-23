<template>
    <div class="container">
        <div class="box">
          <img src="img/返回.png" @click="back">
          <slot name="title"></slot>
        </div>
        <div class="block"></div>
      </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
  width:10rem!important;
  height:1rem!important;
}
.block{
    height:1rem;
    width:10rem;
  }
  .box{
    height:1rem;
    z-index:10000;
      position:fixed;
      top:0;left:0;
      width:10rem;
      height:1rem;
      background:#3190e8;
      display:flex;
      align-items:center;
      color:white;
      
      img{
          width:.5rem;
          height:.5rem;
          display:block;
          margin:0 .3rem;
      }
      
      ::v-deep div{
          width:9rem;
          text-align: center;
          font-size:.5rem;
          font-weight:bold;
          align-self:center;
          box-sizing:border-box;
          padding-right:1rem;
      }
  }
</style>