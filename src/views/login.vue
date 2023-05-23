<template>
    <div class="container">
        
        <van-form>
            <headerTitleComp>
                <template slot="title"><div>密码登录</div></template>
            </headerTitleComp>
            <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div class="code_box">
                <div class="code_item_box">
                    <van-field v-model="code" label="验证码" placeholder="请输入验证码" />
                </div>
                <div class="click_code_box">
                    <img :src="picCode" class="pic_code" >
                    <div @click="updateCode" class="update_code">看不清<span style="color: #3b95e9;display:block;">换一张</span></div>
                </div>
            </div>
            <p style="font-size: .3rem;
            color: red;
            padding: 0.1rem 0.6rem;
            line-height: .3rem;">
                温馨提示：未注册过的账号，登录时将自动注册
            </p>
            <p style="font-size: .3rem;
            color: red;
            padding: 0.1rem 0.6rem;
            line-height: .3rem;">注册过的用户可凭账号密码登录</p>
            <div style="margin: 16px;">
              <van-button round block type="info" @click="login">登录/注册</van-button>
            </div>
          </van-form>
          
    </div>
</template>

<script>
import headerTitleComp from '@/components/headerTitleComp.vue';
import {Base64} from 'js-base64'
import { Toast } from 'vant';
export default {
    components:{
        headerTitleComp,
    },
    data(){
        return{
            password:"",
            username:"",
            code:"",
            picCode:"",
            userList:[],
        }
    },
    methods:{
        updateCode(){
            this.getPicCode()
        },
        async getUserInfo(){
            let res = await this.$http("https://elm.cangdu.org/v1/user")
            console.log(res);
        },
        async getPicCode(){
            let res = await this.$http({
                method:"POST",
                url:"https://elm.cangdu.org/v1/captchas",
            })
            this.picCode = res.data.code;
            // let pos = this.picCode.indexOf(",");
            // console.log(Base64.decode(JSON.stringify(res.data.code.slice(pos+1,this.picCode.length))));
        },
        async login(){
            // https://elm.cangdu.org/v2/login?username=1122345&password=666888&cap=7613
            if(this.password==""||this.username=="")return Toast("请输入用户名或密码")
            // let token = sessionStorage.getItem("userList")
            // if(!token){
            //     this.userList.push({userName:this.username,password:this.password})
            //     sessionStorage.setItem("userList",JSON.stringify(this.userList))
            //     Toast.success("登录成功")
            // }
            let res = await this.$http({
                method:"POST",
                url:"https://elm.cangdu.org/v2/login",
                data:{
                    captcha_code:this.code,
                    password:"666888",
                    username:"1122345"
                }
            })
            this.getUserInfo()
            console.log(res);
            console.log(this.code);
        }
    },
    mounted(){
        this.getPicCode()
        this.getUserInfo()
    }
}
</script>

<style lang="scss" scoped>
.container{
    width:10rem;
    height:100vh;
    .code_box{
        width:10rem;
        display:flex;
        .code_item_box{
            width:6rem;
        }
        .click_code_box{
            width:4rem;
            height:1.2rem;
            display:flex;
            .pic_code{
                width:2.5rem;
                height:1.2rem;
            }
            .update_code{
                width:1.5rem;
                font-size:.35rem;
                text-align:center;
            }
        }
    }
}
</style>