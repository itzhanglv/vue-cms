import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    car:JSON.parse(localStorage.getItem("car")||[])
  },
  mutations:{
    addToCar(state,obj){
      var flag=false
      state.car.some(item=>{
        if(item.id==obj.id){
          item.count+=obj.count
          flag=true
        }
      })
      if(!flag){
        state.car.push(obj)
      }
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    changeCountById(state,obj){
      state.car.some(item=>{
        if(item.id==obj.id){
          item.count=parseInt(obj.count)
        }
      })
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    changeSelectedById(state,obj){
      state.car.some(item=>{
        if(item.id==obj.id){
          item.selected=obj.selected
        }
      })
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    deleteGoodsFromCar(state,id){
      var flag=-1;
      state.car.some((item,index)=>{
        if(item.id==id){
          flag=index
          return
        }
      })
      state.car.splice(flag,1)
      localStorage.setItem("car",JSON.stringify(state.car))
    }
  },
  getters:{
    getGoodsCount(state){
      var count=0
      state.car.forEach(item=>{
        if(item.selected){
        count+=parseInt(item.count)
        }
      })
      return count
    },
    getGoodsTotalPrice(state){
      var price=0
      state.car.forEach(item=>{
        if(item.selected){
        price+=item.count * item.sell_price
        }
      })
      return price
    },
    getGoodsSelectedCount(state){
      var selectedCount=0
      state.car.forEach(item=>{
        if(item.selected){
          selectedCount+=item.count
        }
      })
      return selectedCount
    },

  }
})
export default store