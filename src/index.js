import Vue from "vue"
import app from "./App.vue"
// import { Header, Swipe, SwipeItem ,Button } from 'mint-ui'
import MintUI from 'mint-ui'
import "mint-ui/lib/style.min.css"
import "./lib/mui/dist/css/mui.css"
import './lib/mui/dist/css/icons-extra.css'
import VueRouter from "vue-router"
import router from "./router.js"
import VueResource from "vue-resource"
import moment from 'moment'
import './reset.scss'
import 'mint-ui/lib/style.css'
import VueLazyload from "vue-lazyload"
import VuePreview from "vue-preview"
// import Vuex from "vuex"
import store from "./store.js"




Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)
Vue.use(VueLazyload)
Vue.use(VuePreview)
// Vue.use(Vuex)
Vue.http.options.root="http://127.0.0.1:3001/"
Vue.http.options.emulateJSON = true
// 定义全局过滤器，用来进行日期格式化
Vue.filter("dateFormate",function(value,pattern='yyyy-mm-dd hh:ss:mm'){
  var date=new Date(value)
  var year=date.getFullYear()
  var month=date.getMonth()+1
  var day=date.getDate()
  var hour=date.getHours()
  var m=date.getMinutes()
  var s=date.getSeconds()
  month=month>10?month:"0"+month
  day=day>10?day:"0"+day
  hour=hour>10?hour:"0"+hour
  m=m>10?m:"0"+m
  s=s>10?s:"0"+s
  return `${year}-${month}-${day} ${hour}:${m}:${s}`
    // return moment(value,moment.ISO_8601).format(pattern)
})
// const store=new Vuex.Store({
//   state:{
//     tempCar:JSON.parse(localStorage.getItem("tempCar"))||[],
//     car:JSON.parse(localStorage.getItem("car"))||[]
//   },
//   mutations:{
//     addToTempCar(state,obj){
//       var flag=false
//        state.tempCar.some(item=>{
//          if(item.id==obj.id){
//            item.count+=obj.count
//            flag=true
//            return
//          }
//        })
//       if(!flag){
//         state.tempCar.push(obj)
//       }
//       localStorage.setItem("tempCar",JSON.stringify(state.tempCar))
//     },
    // updateSelected(state,id){
    //   state.tempCar.some(item=>{
    //     if(item.id==id){
    //       item
    //     }
    //   })
    // }
  // },
  // getters:{
  //   getCounts(state){
  //     var sum=0;
  //     state.tempCar.forEach(item=>{
  //       sum+=item.count
  //     })
  //     return sum
  //   },
  //   getGoodsId(state){
  //     var ids=[]
  //     state.tempCar.forEach(item=>{
  //       ids.push(item.id)
  //     })
  //     return ids
  //   },
  //   getGoodsCount(state){
  //     var counts={}
  //     state.tempCar.forEach(item=>{
  //       counts[item.id]=item.count
  //     })
  //     return counts
  //   },
  //   getGoodsSelected(state){
  //     var selecteds={}
  //     state.tempCar.forEach(item=>{
  //       selecteds[item.id]=item.selected
  //     })
  //     return selecteds
  //   },
    // getFullCarDate(state){
    //   var selecteds={}
    //   state.tempCar.forEach(item=>{
    //     selecteds[item.id]=item.selected
    //   })
    //   state.car.forEach(item=>{
    //     if(item.id==selecteds)
    //   })
    // }
//   }
// })
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)

var vm=new Vue({
  el:"#app",
  render:c=> c(app),
  router,
  store
})