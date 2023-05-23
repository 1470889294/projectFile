<template>
    <div class="box" @click="toDetail">
        <div class="l_box">
            <img :src="item.image_path" alt="">
        </div>
        <div class="r_box">
            <header>
                <h4>
                    {{ item.name }}
                </h4>
                <ul>
                    <li>保</li>
                    <li>准</li>
                    <li>票</li>
                </ul>
            </header>
            <div class="middle">
                <div class="rate">
                    <van-rate v-model="item.rating" allow-half void-icon="star" color="#FF9A0E" void-color="#ccc" size=".3rem" readonly />
                    <span>{{item.rating}}</span>
                    <span>月售{{item.recent_order_num}}单</span>
                </div>
                <div class="r">
                    <span class="fnzs">{{ item.delivery_mode.text }}</span>
                    <span class="zsd">准时达</span>
                </div>
            </div>
            <footer>
                <div class="l_">
                    <span>￥{{ item.float_minimum_order_amount }}起送&nbsp;/&nbsp;{{ item.piecewise_agent_fee.tips}}</span>
                </div>
                <div class="r_">
                    <span>{{ item.distance }}&nbsp;/&nbsp;{{ item.order_lead_time }}</span>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props:["item"],
    data(){
        return{
            
        }
    },
    mounted(){
    },
    methods:{
        toDetail(){
            // console.log(this.item.id);
            this.$router.push({
                name:"detail",
                params:{
                    id:this.item.id
                }
            })
            sessionStorage.setItem("id",JSON.stringify(this.item.id))
            sessionStorage.setItem("item",JSON.stringify(this.item))
        }
    }
}
</script>

<style lang="scss" scoped>
    .box{
        width:10rem;
        height:3rem;
        margin-top:.1rem;
        display:flex;
        justify-content:space-between;
        box-sizing:border-box;
        .l_box{
            width:3rem;
            height:3rem;
            display:flex;
            align-items:center;
            img{
                width:2rem;
                display:block;
                height:2rem;
                margin-left:.2rem;
            }
        }
        .r_box{
            width:8rem;
            header{
                margin:.1rem 0 .5rem;
                display:flex;
                justify-content:space-between;
                ul{
                    display: flex;
                    transform: scale(.6);
                    margin-right: -0.3rem;
                    li{
                        font-size: .4rem;
                        color: #999;
                        border: 0.025rem solid #f1f1f1;
                        padding: 0 0.04rem;
                        border-radius: 0.08rem;
                        margin-left: 0.05rem;
                    }
                }
                h4{
                    position:relative;
                    align-self:center;
                    &::before{
                        content: "\54C1\724C";
                        display: inline-block;
                        font-size: .2rem;
                        line-height: .4rem;
                        color: #333;
                        background-color: #ffd930;
                        padding: 0 0.1rem;
                        border-radius: 0.1rem;
                        margin-right: 0.05rem;
                    }
                }
            }
            .middle{
                display:flex;
                justify-content:space-between;
                margin-bottom:.3rem;
                .rate{
                    width:4rem;
                    display:flex;
                    justify-content:space-around;
                    font-size:.2rem!important;
                }
                .r{
                    .fnzs{
                        color: #fff;
                        background-color: #3190e8;
                        border: 0.025rem solid #3190e8;
                    }
                    .zsd{
                        color: #3190e8;
                        border: 0.025rem solid #3190e8;
                    }
                }
            }
            footer{
                font-size:.3rem!important;
                display: flex;
                justify-content: space-between;
                span{
                    display:block;
                }
                .l_{
                    width:3.2rem;
                }
                .r_{
                    overflow-x:hidden;
                    height:.5rem;
                }
            }
        }
    }
</style>