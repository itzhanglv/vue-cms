<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="item.id">
                <router-link :to="'/home/newsList/newInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <p class="new-title">{{item.title}}</p>
                        <p class='mui-ellipsis'>
                           <span>发表时间：{{item.add_time | dateFormate}}</span> <span>点击：{{item.click}}次</span></p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>
<script>
    import { Toast} from "mint-ui"
    export default {
      data(){
        return {
          newsList:[]
        }
      },
      created(){
        this.getNewslist()
      },
      methods:{
        getNewslist(){
          this.$http.get("api/getnewslist").then(response=>{
               if(response.body.status === 0){
                 this.newsList=response.body.message
               }
          },response=>{
            Toast("获取列表失败")
          })
        }
      }
    }
</script>
<style lang="scss" scoped>
    .mui-table-view  {
        .new-title {
            color:black;
            font-size:12px;
            font-weight: bold;
        }
        .mui-ellipsis{
            color:deepskyblue;
            font-size:10px;
            display: flex;
            justify-content:space-between;
        }
    }
</style>