<template>
    <div class="shopcar-container">
        <div class="order-item-list">
        <div class="mui-card" v-for="item in orders" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="order-item">
                        <mt-switch v-model="value=item.selected" @change="selecteChanged(item.id,value)"></mt-switch>
                        <div class="order-item-info">
                            <img :src="item.img_url" alt="">
                            <div>
                                <p>{{ item.title}}</p>
                                <div class="order-item-info-price">
                                    <span>￥{{ item.sell_price}}</span>
                                    <shopcar-numbox :goodsCount="item.count" @fun="numberChange(arguments)" :numberId="item.id"></shopcar-numbox>
                                    <a @click.prevent="deleteGoodsOrder(item.id)">删除</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="mui-card order-item-total">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <div>
                       <p>总计（不含运费）</p>
                       <p>已勾选商品 <span>{{$store.getters.getGoodsSelectedCount}}</span>件，总价：<span>￥{{$store.getters.getGoodsTotalPrice}}</span> </p>
                   </div>
                    <mt-button type="danger" size="small">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import shopcarNumbox from "../customer/shopcar-numbox.vue"
    export default  {
      data(){
        return {
          orders:[],
          value:true,
          selecte:this.selecteChanged()
        }
      },
      created(){
        this.getGoodsOrders()
      },
      methods:{
       getGoodsOrders(){

          this.orders=JSON.parse(localStorage.getItem("car")||[])
       },
        selecteChanged(id,value){
         if(value){
         var obj={}
         obj.id=id
          obj.selected=value.selected
            this.$store.commit("changeSelectedById",obj)
         }
        },
        numberChange(value){
         var obj={}
         obj.id=value[1]
          obj.count=value[0]
          this.$store.commit("changeCountById",obj)
        },
        deleteGoodsOrder(id){
           this.$store.commit("deleteGoodsFromCar",id)
          var index=-1
          this.orders.some((item,i)=>{
            if(item.id==id){
              index=i
              return
            }
          })
          this.orders.splice(index,1)
        }
      },
      components:{
        "shopcar-numbox":shopcarNumbox
      },
      watch:{
        "selecte":function(newVal,oldVal){
          console.log(this.selecte)
        }
      }
    }
</script>
<style lang="scss" scoped>
   .shopcar-container {
       .order-item-list {
       background-color: gainsboro;
       overflow: hidden;
       .order-item {
           display: flex;
           justify-content: space-between;
           .order-item-info {
               display: flex;
               justify-content: space-between;
               align-items: center;
               img {
                   width: 60px;
                   height: 60px;
               }
               p {
                   font-size: 12px;
                   color: #000;
               }
               .order-item-info-price {
                   display: flex;
                   justify-content: start;
                   align-items: center;
                   span {
                       display: inline-block;
                       margin-right: 5px;
                       color: red;
                       font-size: 12px;
                   }
                   a {
                       margin-left: 5px;
                       font-size: 12px;
                   }
               }
           }
       }
       }
       .order-item-total {
           .mui-card-content-inner {
               display: flex;
               justify-content: space-between;
               align-items: center;
               p {
                   font-size: 13px;
                   span {
                       color: red;
                       font-weight: bold;
                   }
               }
           }
       }
   }

</style>