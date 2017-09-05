<template>
  <div class="main">
    <header>我的后台管理系统<span>欢迎{{username}}登录</span></header>
    <section>
      <comp1></comp1>
      <div class="body_right">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import comp1 from '../comp1.vue'
export default {
  name: 'hello',
  data () {
    return {
      username:""
    }
  },
  mounted(){
    this.username=sessionStorage.getItem("username");
    
  },
  components:{
    comp1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width:1356px;
  height:758px;
  background:#fff;
  position:absolute;
  left:0;
  top:0;
}
.main header{
  width:1366px;
  height:50px;
  background:#8096A9;
  color:#eee;
  font-size:20px;
  font-family:"宋体";
  line-height:50px;
  padding:0 20px;
  box-sizing:border-box;
}
.main header span{
  float:right;
  margin-right:20px;
}
.body_right{
  width:80%;
  position:absolute;
  right:30px;
  top:50px;
}
</style>
