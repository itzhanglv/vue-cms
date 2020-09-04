<template>
    <div class="customer-comment">
        <div class="commentTitle">发表评论</div>
        <hr>
        <textarea placeholder="请输入评论的内容（最多120个字）" class="commentContent" maxlength="120" v-model="content">

        </textarea>
        <mt-button type="primary" size="large" @click="reportComment">发表评论</mt-button>
        <!--评论内容-->
        <div class="comment-list">
            <div class="comment-item" v-for="(item,index) in cmmList" :key="index">
            <div class="comment-info">
                第{{index+1}}楼 用户：{{item.user_name}} 发表时间：{{item.add_time | dateFormate}}
            </div>
            <div class="comment-detail">
                {{item.content}}
            </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          cmmList:[],
          pages:1,
          content:""
        }
      },
      created(){
        this.getCommentsList(this.cid)
      },
      props:["cid"],
      methods:{
        getCommentsList(id){
          this.$http.get("api/getcomments/"+this.cid+"?pages="+this.pages).then(response=>{
           if(response.body.status===0){
             this.cmmList=response.body.message
           }
          })
        },
        reportComment(){
              var cmm={}
              cmm.user_name="匿名用户"
              cmm.add_time=new Date()
              cmm.content=this.content
              this.cmmList.unshift(cmm)
              this.content=""
        },
      }
    }
</script>
<style lang="scss" scoped>
    .customer-comment {
        .commentTitle {
            font-weight: bold;
        }
        .commentContent {
            margin-bottom: 0;
            font-size: 12px;
        }
        .comment-list {
            .comment-item{
            .comment-info{
                background-color: darkgrey;
                font-size: 12px;
            }
                .comment-detail {
                    font-size: 12px;
                    line-height: 30px;
                }
            }
        }
    }
</style>