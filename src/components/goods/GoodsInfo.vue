<template>
    <div class="goodsInfo_container">
        <transition  v-on:before-enter="beforeEnter"
                     v-on:enter="enter"
                     v-on:after-enter="afterEnter">
            <span class="ball" v-show="flag"></span>
        </transition>
        <!--商品图片轮播区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="item in imgList" :key="item.src">
                            <img :src="item.src" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>
        <!--商品价格区域-->
        <div class="mui-card goods_price">
            <div class="mui-card-header goodInfo_title">{{goodInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<span class="market_price">￥{{goodInfo.market_price}}</span>
                        销售价：<span class="sell_price">￥{{goodInfo.sell_price}}</span>
                    </p>
                    <div class="shopNum">
                        <span>购买数量:</span>
                        <numbox :maxValue="goodInfo.stock_quantity" @getNumValue="getValueFromNum"></numbox>
                    </div>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addshopCar()">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!--商品参数区域-->
        <div class="mui-card goods_paramter">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodInfo.goods_no}}</p>
                    <p>库存情况：{{goodInfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodInfo.add_time | dateFormate}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" @click="goodsIntroduce">图文介绍</mt-button>
                <mt-button type="danger" size="large" @click="goodsComment" >商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import numbox from "../customer/numbox.vue"
  export default {
    data () {
      return {
        id: this.$route.params.id,
        imgList: [],
        goodInfo: {},
        flag:false,
        btnFlag:false,
        count:1,  //用来存储numbox组件的value值,默认为1
      }
    },
    created () {
      this.getGoodsImgs()
      this.getGoodById()
    },
    methods: {
      getGoodsImgs () {
        this.$http.get('api/getgoodsimg').then(response => {
          if (response.body.status === 0) {
            this.imgList = response.body.message
          }
        })
      },
      getGoodById () {
        this.$http.get('api/getgoodbyid/'+this.id).then(response => {
          if (response.body.status === 0) {
            this.goodInfo = response.body.message[0]
          }
        })
      },
      goodsIntroduce(){
        this.$router.push({name:"goodsIntroduce"})
      },
      goodsComment(){
        this.$router.push({name:"goodsComment"})
      },
      addshopCar(){
       if(!this.btnFlag){
         this.flag=!this.flag
         this.btnFlag=true
       }
       var goodsItem={}
       goodsItem.id=this.id
        goodsItem.count=this.count
        goodsItem.title=this.goodInfo.title
        goodsItem.sell_price=this.goodInfo.sell_price
        goodsItem.img_url=this.goodInfo.img_url
        goodsItem.selected=true
        this.$store.commit("addToCar",goodsItem)
      },
      beforeEnter(el){
        el.style.transform="translate(0,0)"
      },
      enter(el,done){
        el.offsetWidth
        //获取小球的位置
        var ball=el.getBoundingClientRect()
        var balltarget=document.getElementById("ballTarget").getBoundingClientRect()
          var leftR=balltarget.left-ball.left
        var topR=balltarget.top-ball.top
        el.style.transform=`translate(${leftR}px,${topR}px)`
        el.style.transition="all 0.4s ease"
        done()
      },
      afterEnter(el){
        this.flag=!this.flag
        this.btnFlag=false
      },
      getValueFromNum(value){
        this.count=value
      }
    },
    components:{
      numbox
    }
  }
</script>
<style lang="scss" scoped>
    .goodsInfo_container {
        background-color: gainsboro;
        overflow: hidden;
        position: relative;
        .ball {
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            top:317px;
            left: 130px;
            z-index: 99;
        }
        .mui-card-content-inner {
            height: 200px;
            .mint-swipe-item {
                text-align: center;
                img {
                    width: 170px;
                    height: 100%;
                    /*margin: 0 auto;*/
                }
            }

        }
        .goods_price {
            height: 170px;
            /*overflow: auto;*/
            .goodInfo_title {
                font-size: 16px;
            }
            .price {
                font-size: 12px;
                color: #000;
                .market_price {
                    text-decoration: line-through;
                    margin-right: 5px;
                }
                .sell_price {
                    font-size: 14px;
                    color: red;
                    font-weight: bold;
                }
            }
            .mui-card-content-inner {
                    span {
                        color: #000;
                        font-size: 12px;
                    }
            }
            .shopNum {
                margin-bottom: 10px;
                position: relative;
                /*.ball {*/
                    /*display: inline-block;*/
                    /*width: 15px;*/
                    /*height: 15px;*/
                    /*border-radius: 50%;*/
                    /*background-color: red;*/
                    /*position: absolute;*/
                    /*top:5px;*/
                    /*left: 110px;*/
                    /*z-index: 99;*/
                /*}*/
            }
        }
        .goods_paramter {
            .mui-card-header {
                font-size: 14px;
            }
            .mui-card-content-inner {
                height: 150px;
                p {
                    font-size: 12px;
                }

            }
            .mui-card-footer {
                display: flex;
                flex-direction: column;
                .mint-button--primary{
                    margin-bottom: 10px;
                        /*color: #26a2ff !important;*/
                }
                /*.mint-button--danger.is-plain {*/
                    /*.mint-button-text {*/
                        /*color:#ef4f4f;*/
                    /*}*/
                /*}*/

            }
        }

    }
</style>