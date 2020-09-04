<template>
    <div class="app1">
        <mt-header fixed title="vue项目练习" style="z-index: 999;">
            <a slot="left" v-show="back" style="color: white;" >
                <mt-button icon="back" @click="goBack">返回</mt-button>
            </a>
        </mt-header>
        <span class="ball">
            {{user.name}}
        </span>
        <transition mode="out-in">
        <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-zl" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-zl" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-zl" to="/shopCar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="ballTarget">{{$store.getters.getGoodsCount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-zl" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    import swipe from "./components/customer/swipe.vue"
export default {
  data(){
    return {
      back:false
    }
  },
  created(){
   this.showBack()
  },
  components:{swipe},
  methods:{
    goBack(){
      console.log(1111)
      this.$router.go(-1)
    },
    showBack(){
      if(this.$route.path!="/home"){
        this.back=true
      }else {
        this.back=false
      }
    }
  },
  watch:{
    $route:function(oldVal,newVal){
      this.showBack()
}
  },
  components:{
    swipe
  }
}
</script>
<style lang="scss" scoped>
    .app1 {
        position: relative;
        .ball {
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            top: 317px;
            left: 130px;
            z-index: 99 !important;
            /*transform:translate(106px,401px);*/
        }

        .v-enter {
            transform: translateX(100%);
        }
        .v-leave-to {
            transform: translateX(-100%);
        }
        .v-enter-active,
        .v-leave-active {
            transition: all 0.5s ease;
        }
        .mui-bar-tab .mui-tab-item-zl {
            display: table-cell;
            overflow: hidden;
            width: 1%;
            height: 50px;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #929292;
        }
        .mui-bar-tab .mui-tab-item-zl .mui-icon {
            top: 3px;
            width: 24px;
            height: 24px;
            padding-top: 0;
            padding-bottom: 0;
        }
        .mui-bar-tab .mui-tab-item-zl .mui-icon ~ .mui-tab-label {
            font-size: 11px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .mint-button-text {
            color: white !important;
        }
    }
</style>