<template>
    <div class="photolist-container">
        <!--图片分类-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0? 'mui-active':'']" @click="getImgByCategory(item.id)"
                       data-wid="tab-top-subpage-1.html"
                       v-for="item in category" :key="item.id">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!--图片列表：需要进行懒加载-->
        <div class="imglist-container">
            <ul>
                <router-link v-for="item in imgs" :key="item.id" tag="li" :to="'/home/photoinfo/'+item.id">
                    <img v-lazy="item.img_url">
                    <p class="img-info">
                        <span class="img_title">{{item.title}}</span><br>
                        <span class="img_remark">{{item.remark}}</span>
                    </p>
                </router-link>
            </ul>

        </div>
    </div>
</template>
<script>
  import mui from '../../lib/mui/dist/js/mui.min.js'
  export default {
    data () {
      return {
        category: [],
        imgs: []
      }
    },
    created () {
      this.getimgCategory()
      this.getImgByCategory(0)
    },
    mounted () {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      })
    },
    methods: {
      getimgCategory () {
        this.$http.get('api/getimgcategory').then(response => {
          if (response.body.status === 0) {
            var all = {}
            all.title = '全部'
            all.id = 0
            this.category = response.body.message
            console.log(this.category)
            this.category.unshift(all)
          }
        })
      },
      getImgByCategory (id) {
        this.$http.get('api/getimages/' + id).then(response => {
          if (response.body.status === 0) {
            this.imgs = response.body.message
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .photolist-container {
        z-index: -1;
    }
    .imglist-container {
        ul {
            list-style: none;
            padding: 10px;
            margin-top: 0px;

            li {
                position: relative;
                box-shadow: 0 0 10px #999999;
                /*background-color: white;*/
                margin-bottom: 10px;
                img {
                    width: 100%;
                    vertical-align: middle;
                }
                img[lazy=loading] {  /*没有起作用*/
                    width: 40px;
                    height: 300px;
                    margin: auto;
                    border: 10px solid black;
                }
                .img-info {
                    position: absolute;
                    bottom: 0;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.4);
                    margin-block-end: 0;
                    .img_title {
                        font-size: 14px;
                    }
                    .img_remark {
                        font-size: 12px;
                        padding-bottom: 0;
                    }
                }
            }

        }

    }
</style>