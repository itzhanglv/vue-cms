<template>
    <div class="swipe-container">
        <!--自定义轮播图组件-->
     <slot></slot>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          user:{
            id:1,
            username:"zhangsan"
          }
        }
      }
    }
</script>
<style></style>