<template>
    <div class="photoinfo-container">
        <!--图片详情标题-->
        <div class="photo-title">
            <p class="title">{{imgInfo.title}}</p>
            <p class="subtitle">
                <span>发表时间：{{imgInfo.add_time | dateFormate}}</span>
                <span>点击：{{imgInfo.click}}次</span>
            </p>
            <hr>
        </div>
        <!--图片缩略图-->
        <div class="img-container">
        <vue-preview :slides="imgUrls" @close="handleClose"></vue-preview>

        </div>
        <!--图片介绍-->
        <div class="photo-introduce">
         <p v-html="imgInfo.content"></p>
        </div>
        <!--评论组件-->
        <comment :id="id"></comment>
    </div>
</template>
<script>
    import comment from '../customer/Comment.vue'
    export default {
      data(){
        return {
          id:this.$route.params.id,
          imgUrls:[],
          imgInfo:{}
        }
      },
      created(){
        this.getImageInfo()
        this.getthumimages()
      },
      methods:{
        getthumimages(){
          this.$http.get("api/getthumimages/"+this.id).then(response=>{
            if(response.body.status===0){
              response.body.message.forEach(item=>{
                item.msrc=item.src
                item.w=600
                item.h=400
              })
              this.imgUrls=response.body.message;
            }
          })
        },
        getImageInfo(){
          this.$http.get("api/getimageInfo/"+this.id).then(response=>{
            if(response.body.status===0){
              this.imgInfo=response.body.message[0]
            }
          })
        },
        handleClose(){
          console.log("close event")
        }

      },
      components:{
        comment
      }
    }
</script>
<style lang="scss" scoped>
    .photoinfo-container {
        padding: 0 5px;
        .photo-title {
            margin-top: 10px;
           .title {
               color: deepskyblue;
               text-align: center;
               font-size: 14px;
           }
            .subtitle {
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
        .img-container {
            /deep/ .my-gallery{   //deep深层作用选择器
                display: flex;
                flex-wrap:wrap;//默认换行
                figure{
                    width: 30%;
                    margin: 5px;
                    img{
                        width: 100%;
                        height: 60px;
                        box-shadow: 0 0 8px #999;
                        border-radius: 5px;
                    }
                }
            }
        }
        .photo-introduce {
           p {
               color: #000;
           }
        }
    }
</style>