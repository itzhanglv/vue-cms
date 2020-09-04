<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='maxValue'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number"  value="1" @change="getValue" ref="count"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
    import mui from "../../lib/mui/dist/js/mui.min.js"
    export default {
      data(){
        return {
          value:1
        }
      },
      mounted(){
        mui(".mui-numbox").numbox()
      },
      methods:{
        getValue(){
           this.$emit("getNumValue",this.$refs.count.value)
        }
      },
      props:["maxValue"],
      watch:{
        "maxValue":function(newVla,oldVal){
          mui(".mui-numbox").numbox().setOption("max",parseInt(newVla))
        }
      }
    }
</script>
<style lang="scss" scoped>
    .mui-numbox {
        height: 25px;
        display: inline-block;
        .mui-input-numbox {
            font-size: 14px;
        }
    }
</style>