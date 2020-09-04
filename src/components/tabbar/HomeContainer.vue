<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../images/lunbo1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/lunbo2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/lunbo3.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/lunbo4.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>

    </div>
</template>
<script>
    export default {
      data(){
        return {}
      },
      created(){
        // this.getLunboList()
      },
      methods:{
        getLunboList(){
          console.log(1111)
          this.$http.get("/cms/api/getlunbo").then(result=>{
            console.log(result)
          },response=>{
            console.log("请求失败")
          })
        }
      }
    }
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item:nth-child(1){
         /*background-color: pink;*/
        /*background:url('../../images/lunbo1.jpg')*/
     }
    .mint-swipe-item:nth-child(2){
        /*background-color: hotpink;*/
        /*background:url('../../images/lunbo2.jpg')*/
    }
    .mint-swipe-item:nth-child(3){
        /*background-color: deeppink;*/
        /*background:url('../../images/lunbo3.jpg')*/
    }
    img {
        width: 100%;
        height: 200px;
    }
}
    .mui-table-view {
        background-color: #fff;
        border:none;
        img {
            width: 60px;
        }
        .mui-table-view-cell {
            border: none;
            .mui-media-body {
                font-size: 12px;
            }
        }
    }
</style>