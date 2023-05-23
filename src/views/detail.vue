<template>
    <div class="container">
        <headerTitleComp></headerTitleComp>
        <div class="shadow">
            <img :src="item.image_path" class="bg">
        </div>
        <div class="header_box"> 
            <div class="pic">
                <img :src="item.image_path" >
            </div>
            <div class="center_box">
                <h4 class="title">{{item.name}}</h4>
                <p><span>商家配送&nbsp;/&nbsp;分钟送达&nbsp;/&nbsp;配送费￥</span>{{item.float_delivery_fee}}</p>
                <p>公告：{{item.promotion_info}}</p>
            </div>
            <div>
                <img src="img/返回2.png" class="back2">
            </div>
            <div class="yh" v-if="fleg">
                <div>
                    <span class="fullSub">
                        {{ item.activities[0].icon_name}}
                    </span>
                    <span>
                        {{ item.activities[0].description }}(APP专享)
                    </span>
                </div>
                <div style="overflow:hidden;height:1rem;display:flex;align-items:center;">
                    <span>一个活动</span>
                    <img src="img/返回2.png" style="width:.4rem;height:.5rem;">
                </div>
            </div>
        </div>
        <van-tabs v-model="active" color="#3190e8" title-active-color="#3190e8">
            <van-tab title="商品">
                <div class="l_tab_box" ref="l_box">
                    <van-sidebar v-model="actived" style="width:100%!important;">
                        <van-sidebar-item v-for="item,index in l_list" :key="item.id" @click="lTab(index)" :title="item.name" :badge="badge"  />
                    </van-sidebar>
                </div>
                <div class="wrapper" ref="wrapper">
                    <div class="content">
                        <ul v-for="item,index in l_list" ref="oUl" :key="index">
                            <div class="item_title">
                                <span style="margin-right:.2rem;">{{item.name}}</span>
                                <span class="v">{{item.description}}</span>
                            </div>
                            <li v-for="son,index in item.foods" :key="index">
                                <div class="t_box">
                                    <div class="l">
                                        <img :src="path+son.image_path">
                                    </div>
                                    <div class="r">
                                        <div class="p1">
                                            <p>{{son.name}}</p>
                                            <div class="zp">
                                                    <div class="bt" v-for="a,index in son.attributes" :key="index">
                                                        {{ a?a.icon_name:'' }}
                                                        <!-- <div v-if="a">{{a.icon_name}}</div> -->
                                                    </div>
                                            </div>
                                        </div>
                                        <p class="p2">{{son.description}}</p>
                                        <p class="p3">
                                            <span>月售{{son.month_sales}}份&nbsp;&nbsp;好评率{{son.satisfy_rate}}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="b_box">
                                    <div class="price_box">
                                        <span>￥</span><span class="price">20</span>
                                    </div>
                                    <div class="b_item_box">
                                        <div class="tabs" v-if="son.specifications.length!=0">
                                            <div class="sub">-</div>
                                            <div class="count">0</div>
                                            <div @click="gg(son.specifications[0])" class="gg" >{{ son.specifications[0].name }}</div>
                                            
                                        </div>
                                        <div class="tabs" v-else>
                                            <div class="sub">-</div>
                                            <div class="count">0</div>
                                            <!-- <div class="add">+</div> -->
                                            <svg t="1683807127592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2375" width=".7rem" height=".7rem"><path d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m0 234.666667a32 32 0 0 0-32 32v128H352a32 32 0 0 0 0 64h128v128a32 32 0 0 0 64 0V544h128a32 32 0 0 0 0-64H544V352a32 32 0 0 0-32-32z" fill="#3190e8" p-id="2376"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </van-tab>
            <van-tab title="评价">我是评论页</van-tab>
        </van-tabs>
        <div :style="{'display':flegted?'block':'none','transition':'all 0.5s'}" class="tabsGg_box">
            <div class="tabsGg">
                <div class="gg_title">
                    {{ ggObj.name }}
                </div>
                <div @click="flegted=false" class="del">X</div>
                <p class="gg_gg">规格</p>
                <div class="gg_item">
                    <div class="tab_gg" :class="ggIndex==index?'activety':''" v-for="item,index in ggObj.values" :key="index" @click="ggIndex=index">{{item?item:""}}</div>
                </div>
                <footer>
                    <div>￥<span>20</span></div>
                    <van-tag type="primary" size="large" @click="addCard(20)">加入购物车</van-tag>
                </footer>
            </div>
            <div @click="flegted=false" class="shadow"></div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import headerTitleComp from '@/components/headerTitleComp.vue';
    export default {
        components:{
            headerTitleComp,
        },
        data(){
            return {
                list:[],
                item:{},
                fleg:false,
                active:2,
                actived:0,
                badge:null,
                l_list:[],
                bScroll:null,
                curIndex:0,
                scrollY:0,
                listHeight:[],
                path:"https://elm.cangdu.org/img/",
                flegted:false,
                ggObj:[],
                visible:true,
                ggIndex:0,
            }
        },
        methods:{
            lTab(i){
                this.bScroll.scrollToElement(".content",1000,0,this.$refs.oUl[i].offsetTop)
            },
            height(){
                let wrap2 = this.$refs.oUl;
                let height = 0;
                this.listHeight.push(height);
                for(let i=0;i<wrap2.length;i++){
                    let item = wrap2[i];
                    height += item.clientHeight;
                    this.listHeight.push(height)
                }
            },
            gg(e){
                this.flegted = true;
                console.log(e);
                this.ggObj = e;
            },
            addCard(price){
                this.flegted = false;
            }
        },
        async mounted(){
            let cId = sessionStorage.getItem("id")
            this.item = JSON.parse(sessionStorage.getItem("item"))
            let res = await this.$http("https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+cId)
            this.l_list = res.data;
            console.log(this.l_list);
            if(this.item.activities.length>=1){
                this.fleg = true
            }else this.fleg = false;
            this.$nextTick(()=>{
                this.height();
                this.bScroll = new BScroll(this.$refs.wrapper,{
                    probeType:2,
                    click:true
                })
                this.bScroll.on("scroll",position=>{
                    this.scrollY = Math.abs(Math.round(position.y));
                    for(let i=0;i<this.$refs.oUl.length;i++){
                        let height1 = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        if(!height2||(this.scrollY>=height1&&this.scrollY<height2)){
                            this.actived = i;
                            return;
                        }
                    }
                })
            })
        },
        
    }
</script>

<style lang="scss" scoped>
.shadow{
    width:10rem;
    height:3.3rem;
    position:absolute;
    top:1rem;z-index:1;
    overflow:hidden;
    .bg{
        width:10rem;
        height:3.3rem;
        filter: blur(.2rem);
        transform:scale(1.2);
    }
}
.header_box{
    position:relative;z-index: 100;
    width:10rem;
    height:3.4rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    color:white;
    box-sizing:border-box;
    padding:.1rem 0;
    .yh{
        width:10rem;
        height:1rem;
        display:flex;
        font-size:.3rem;
        justify-content:space-between;
        align-items:center;
        box-sizing:border-box;
        padding:0 .2rem;
        .fullSub{
            background-color: rgb(240, 115, 115);
            border-color: rgb(240, 115, 115);
            padding: 0 0.04rem;
            border: 0.025rem solid #fff;
            border-radius: 0.1rem;
            font-size: .4rem;
            display: inline-block;
        }
    }
    .pic{
        img{
            width:2rem;
            height:2rem;
        }
    }
    .center_box{
        width:6rem;
        height:2.1rem;
        p{
            margin-top:.25rem;
            font-size:.3rem;
        }
    }
    .title{
        font-size:.45rem;
    }
    .back2{
        width:.6rem;
        height:.6rem;
    }
}
.l_tab_box{
    width:3rem;
    height:15rem;
    float: left;
    overflow-y:scroll;
}

.wrapper{
    float: left;
    width:7rem;
    height:15rem;
    
    overflow:hidden;
    .content{
        width:7rem;
        ul{
            width:7rem;
            .item_title{
                width:100%;
                height:1rem;
                font-size:.45rem;
                box-sizing:border-box;
                padding:0 .5rem;
                line-height:1rem;
                .v{
                    font-size:.35rem;
                    color:#ccc;
                }
            }
            li{
                width:7rem;
                height:3.5rem;
                margin-bottom:.2rem;
                .t_box{
                    width:100%;
                    height:2.6rem;
                    display:flex;
                    align-items:center;
                    .r{
                        width:100%;
                        box-sizing:border-box;
                        padding:0 .2rem;
                        p{margin-top:.2rem;}
                        .p1{
                            font-weight:bold;
                            font-size:.5rem;
                            display:flex;
                            justify-content:space-between;
                            .zp{
                                display:flex;
                                justify-content:flex-end;
                                align-items:center;
                                .bt{
                                    font-size: .3rem;
                                    height: .3rem;
                                    line-height: .3rem;
                                    padding: 0.1rem;
                                    border: 1px solid rgb(240, 115, 115);
                                    border-radius: 0.3rem;
                                    margin-right: 0.1rem;
                                    transform: scale(.8);
                                    color: rgb(240, 115, 115);
                                }
                            }
                            
                        }
                        .p2{
                            color:#999;
                            font-size:.3rem;
                        }
                        .p3{
                            font-size:.3rem;
                        }
                    }
                    .l{
                        width:2rem;
                        height:2.6rem;
                        display:flex;
                        align-items:center;
                        img{
                            width:2rem;
                        }
                    }
                }
                .b_box{
                    width:5rem;
                    height:.9rem;
                    float:right;
                    display:flex;
                    justify-content:flex-end;
                    align-items:center;
                    .b_item_box{
                        width:3.3rem;
                        height:.9rem;
                        display:flex;
                        justify-content:flex-end;
                        align-items:center;
                        box-sizing:border-box;
                        padding:0 .2rem;
                        .tabs{
                            display:flex;
                            justify-content:flex-end;
                            align-items:center;
                            div:nth-child(2){
                                font-size: .5rem;
                                color: #666;
                                min-width: 1rem;
                                text-align: center;
                                font-family: Helvetica Neue,Tahoma;
                            }
                            
                            
                            .sub{
                                height:.6rem;
                                color: #666;
                                width:.6rem;
                                text-align: center;
                                font-size:.6rem;
                                line-height:.5rem;
                                box-sizing:border-box;
                                border:.01rem solid #666;
                                border-radius:50%;
                                font-family: Helvetica Neue,Tahoma;
                            }
                            .add{
                                width:.4rem;
                                height:.4rem;
                                display: block;
                                font-size: .5rem;
                                text-align:center;
                                color: #fff;
                                line-height:.4rem;
                                padding: 0.1rem 0.1rem;
                                background-color: #3190e8;
                                border-radius: 50%;
                                border: 1px solid #3190e8;
                                fill: #3190e8;
                            }
                        }
                        .gg{
                            width:.8rem;
                            display: block;
                            font-size: .3rem;
                            text-align:center;
                            color: #fff;
                            padding: 0.1rem 0.1rem;
                            background-color: #3190e8;
                            border-radius: 0.2rem;
                            border: 1px solid #3190e8;
                        }
                        .sub{
                            fill: #999;
                            width: 0.9rem;
                            height: 0.9rem;
                        }
                    }
                }
            }
        }
    }
}
.tabsGg_box{
    transition:all .5s;
    .shadow{
        width:100vw;
        height:100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0, 0.5);
        z-index:10000;
    }
    .tabsGg{
        background:white;
        width:7rem;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:10001;
        border-radius:.2rem;
        footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f9f9f9;
            padding:.2rem .5rem;
            border: 1px;
            border-bottom-left-radius: 0.2rem;
            border-bottom-right-radius: 0.2rem;
            font-size:.4rem;
            div{
                font-size:.4rem;
                color: #ff6000;
                span{
                    font-size:.5rem;
                }
            }
        }
        .gg_gg{
            width:100%;
            font-size:.4rem;
            height:.8rem;
            box-sizing:border-box;
            padding:0 .3rem;
            line-height:.8rem;
        }
        .gg_title{
            font-size: .6rem;
            color: #222;
            font-weight: 400;
            text-align: center;
            padding: .3rem .2rem 0;
            width:100%;
            height:1rem;
        }
        .del{
            width:1rem;
            height:1rem;
            position:absolute;
            right:0;
            top:0;
            font-size:.5rem;
            text-align:center;
            line-height:1rem;
        }
        .gg_item{
            width:100%;
            min-height:2rem;
            display:flex;
            box-sizing:border-box;
            padding:0 .3rem;
            flex-wrap:wrap;
        }
        .tab_gg{
            font-size: .4rem;
            height:.6rem;
            line-height:.1rem;
            padding:.4rem .2rem;
            box-sizing:border-box;
            border: 0.025rem solid #ddd;
            border-radius: 0.2rem;
            margin-right: 0.3rem;
            margin-bottom: 0.2rem;
            &.activety{
                border-color: #3199e8;
                color: #3199e8;
            }
        }
    }
}
.price_box{
    font-size: .4rem;
    color: #f60;
    font-weight: 700;
    margin-right: 0.3rem;
    .price{
        font-size:.6rem;
    }
}
</style>