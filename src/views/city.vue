<template>
    <div class="container">
        <!-- 当前 -->
        <div class="city_nav sha">
            <div class="location border">
                <div class="reuse">当前定位城市:</div>
                <p>定位不准时，请在城市列表中那选择</p>
            </div>
            <div class="front location" style="justify-content: space-between">
                <p>{{ dqPos.name }}</p>
                <div>></div>
            </div>
        </div>
        <!-- 热门 -->
        <div class="city-container sha">
            <div class="city-title border">热门城市</div>
            <ul class="list">
                <li v-for="item in hotCity" :key="item.id">{{ item.name }}</li>
            </ul>
        </div>
        <!-- 所有城市 -->
        <div class="group_city" v-for="(item, index) in list" :key="index">
            <div class="group_tit">{{ item.header }}</div>
            <ul class="group_city_item">
                <li class="oli" v-for="(son, index) in item.cityList" :key="index">
                    {{ son.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            dqPos:[],
            hotCity:[]
        }
    },
    async mounted(){
        let dq = await this.$http("https://elm.cangdu.org/v1/cities?type=guess")
        let hot = await this.$http("https://elm.cangdu.org/v1/cities?type=hot")
        this.dqPos = dq.data;
        this.hotCity = hot.data;
        let city = await this.$http({
            url:"https://elm.cangdu.org/v1/cities",
            params:{type:"group"}
        })
        this.obj = city.data;
        for(let key of Object.entries(city.data).sort()){
            this.list.push({
                header:key[0],
                cityList:key[1]
            })
        }
        // this.list.sort((a,b)=>a["header"].localeCompare(b["header"]))
    }
}
</script>

<style lang="scss" scoped>
.container{
    width:10rem;
    box-sizing:border-box;
    
}
.oli{
    color: #666!important;
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    width: 25%;
    height: 1.3rem;
    line-height:1.3rem;
    box-sizing:border-box;
    padding:0 .2rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}
.group_tit{
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size:.4rem;
    line-height:.4rem;
    padding:.2rem 0;
}
.sha{
    width:10rem;
    color: #3190e8;
    .front{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.2rem;
        font-size:.5rem;
        font-weight:560;
        padding: 0 0.45rem;
        border-top: .2rem solid #e4e4e4;
        border-bottom: .1rem solid #e4e4e4;
        margin-bottom:.3rem;
    }
    .city-title{
        color: #666;
        font-weight: 400;
        text-indent: 0.45rem;
        border-top: .1rem solid #e4e4e4;
        border-bottom: .01rem solid #e4e4e4;
        font-size:.4rem;
        padding:.2rem 0;
    }
    .list{
        li{
            float: left;
            text-align: center;
            color: #3190e8;
            border-bottom: 0.025rem solid #e4e4e4;
            border-right: 0.025rem solid #e4e4e4;
            width: 25%;
            height: 1rem;
            line-height:1rem;
            font-size:.35rem;
        }
    }
}
.city_container{
    background-color: #fff;
    margin-bottom: 0.4rem;
    
}
.city_nav{
    .border{
        width:10rem;
        display: flex;
        justify-content: space-between;
        line-height: 1rem;
        padding: 0 0.45rem;
        div{
            font-size: .35rem;
            color: #666;
        }
        p{
            font-weight: 900;
            font-size: .25rem;
            color: #9f9f9f;
        }
    }
}
</style>