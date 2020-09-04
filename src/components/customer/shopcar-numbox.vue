<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="goodsCount" @change="numberChange" ref="numbox"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
    import mui from "../../lib/mui/dist/js/mui.min.js"
    export default {
      data(){
        return {
        }
      },
      mounted(){
        mui(".mui-numbox").numbox()
      },
      methods:{
        numberChange(){
          this.$emit("fun",this.$refs.numbox.value,this.numberId)
        }
      },
      props:["goodsCount","numberId"]
    }
</script>
<style lang="scss" scoped>
    .mui-numbox {
        height: 25px;

    }
</style>