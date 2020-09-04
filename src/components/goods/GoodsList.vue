<template>
    <div class="goods_container">
       <div class="goods_item" v-for="item in goodsList" :key="item.id">
           <div class="goods_info" @click="goodsInfo(item.id)">
               <img :src="item.img_url" alt="">
               <p class="goods_name">{{ item.title}}</p>
           </div>
           <div class="goods_sell">
               <p class="goods_price">
                   <span class="new_price">￥{{item.sell_price}}</span>
                   <span class="old_price">￥{{item.market_price}}</span>
               </p>
               <p class="goods_ms">
                   <span>热卖中</span>
                   <span>剩{{item.stock_quantity}}件</span>
               </p>
           </div>
       </div>

    </div>
</template>
<script>
    export default {
      data(){
        return {
          goodsList:[]
        }
      },
      created(){
        this.getGoodsList()
      },
      methods:{
        getGoodsList(){
          this.$http.get("api/getgoods").then(response=>{
            if(response.body.status===0){
              this.goodsList=response.body.message;
            }
          })
        },
        goodsInfo(id){
          this.$router.push({ name: 'goodsInfo', params: { id:id}})
        }
      }
    }
</script>
<style lang="scss" scoped>
    .goods_container {
        margin-top: 5px;
        padding:5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .goods_item {
            width: 49%;
            height: 270px;
            border:1px solid gainsboro;
            box-shadow: 0 0 5px gainsboro;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 5px;
            .goods_info {
                padding: 2px;
                img {
                    width: 100%;
                }
                .goods_name {
                    width: 100%;
                    color: #000;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space:nowrap;
                    margin-bottom: 0px;
                }
            }
            .goods_sell {
                background-color: gainsboro;
                padding: 5px;
                .goods_price {
                    .new_price {
                        color: red;
                        font-weight: bold;
                        margin-right: 10px ;
                    }
                    .old_price {
                        font-size: 12px;
                       text-decoration: line-through;
                    }
                }
                .goods_ms {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    margin-bottom: 0;
                }
            }
        }
    }
</style>