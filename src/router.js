import VueRouter from "vue-router"
import homeContainer from "./components/tabbar/HomeContainer.vue"
import memberContainer from "./components/tabbar/MemberContainer.vue"
import shopCarContainer from "./components/tabbar/ShopCarContainer.vue"
import searchContainer from "./components/tabbar/SearchContainer.vue"
import NewsList from "./components/news/NewsList.vue"
import NewInfo from "./components/news/NewInfo.vue"
import PhotoList from "./components/photos/PhotoList.vue"
import PhotoInfo from "./components/photos/PhotoInfo.vue"
import GoodsList from "./components/goods/GoodsList.vue"
import GoodsInfo from "./components/goods/GoodsInfo.vue"
import GoodsIntroduce from "./components/goods/GoodsIntroduce.vue"
import GoodsComment from "./components/goods/GoodsComment.vue"

var router=new VueRouter({
  routes:[
    {path:"/",redirect:"/home"},
    {path:"/home",component:homeContainer},
    {path:"/home/newsList",component:NewsList},
    {path:"/home/newsList/newInfo/:id",component:NewInfo},
    {path:"/home/photoinfo/:id",component:PhotoInfo},
    {path:'/home/photoList',component:PhotoList},
    {path:"/home/goodsList",component:GoodsList},
    {path:"/home/goodsInfo/:id",component:GoodsInfo,name:"goodsInfo"},
    {path:"/home/goodsIntroduce",component:GoodsIntroduce,name:"goodsIntroduce"},
    {path:"/home/goodsComment",component:GoodsComment,name:"goodsComment"},
    {path:"/member",component:memberContainer},
    {path:"/shopCar",component:shopCarContainer},
    {path:"/search",component:searchContainer},
  ],
  linkActiveClass:"router-link-exact-active"
})

export default router