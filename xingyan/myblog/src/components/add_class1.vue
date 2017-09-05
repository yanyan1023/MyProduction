<template>
  <div class="child">
   <p>欢迎来到个人博客后台管理系统</p>
   <p>Welcome To MyPersonal BackStage Management System</p>
   
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child{
  padding:30px;
}
.child p{
  margin-left:30px;
  font-size:40px;
  font-family:"宋体"
}
.child p:last-child{
  font-size:20px;
  line-height:40px;
}
</style>
