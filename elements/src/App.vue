<template>
  <div class="wrapper">
    <div class="bgImg">
     <transition name="el-fade-in-linear">
        <div v-show="show">
          <p>My blog has been set up for <span class="fontNum"></span> days</p>
          <p>WE  ARE  WORKING  HARD  FOR  BETTER  EXPIRIENCE</p>
        </div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="!show" >
          <p id="stay">STAY IN TOUCH WITH US</p>
          <p><i class="iconfont icon-dingwei"></i> Beijing Haidian Shangdi<i class="iconfont icon-phonenum"></i> 132-6171-0231</p>
        </div>
      </transition>
        
    </div>
    <div class="mark"></div>
    <ul class="title_right">
      <router-link tag="li" to="#" id="one"><i @click="changeBg">CHANGE</i></router-link>
      <router-link tag="li" to="/MyArticle" class="centerFont" id="centerFont" style="color:#E84D49">MyArticle</router-link>
      <router-link tag="li" to="/MyPhotos" class="centerFont">MyPhotos</router-link>
      <router-link tag="li" to="/" class="centerFont">Myblog</router-link>
      <router-link tag="li" to="/" class="centerFont"><i @click="show=!show">Contact</i></router-link>
      <router-link tag="li" to="/" id="theone"><i class="iconfont icon-28" @click="open('1')"></i></router-link>
      <router-link tag="li" to="/"><i class="iconfont icon-25" @click="open('2')"></i></router-link>
      <router-link tag="li" to="/"><i class="iconfont icon-Instagram" @click="open('3')"></i></router-link>
      <router-link tag="li" to="/"><i class="iconfont icon-xinlangweibo" @click="open('4')"></i></router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
        flag:true,
        show: true
      }
  },
  mounted(){
    var fontNum=document.querySelector(".fontNum");
    //获取当前的日期
    var day2 = new Date(),//当前时间
        day1 = new Date(2017,8,6), //创建博客时间  
        ms=day2.getTime()-day1.getTime(),
        days=ms/(1000 * 60 * 60 * 24);
        if(parseInt(days)<10){//已创建博客天数
          fontNum.innerHTML="0"+parseInt(days);
        }else{
          fontNum.innerHTML=parseInt(days);
        }
       
  },
  methods:{
    changeBg(){
      if(this.flag){
        this.flag=false;
        document.querySelector(".bgImg").style.background="url(../static/images/bg-image-1.jpg) no-repeat center 0%"
      }else{
        document.querySelector(".bgImg").style.background="url(../static/images/bg-image.jpg) no-repeat center -5%";
        this.flag=true;
      }
      
    },
     open(i) {  
       var msg=""; 
       switch(i){
         case "1":msg="我的QQ号码：1004871170";break;
         case "2":msg="我的微信：1004871170";break;
         case "3":msg="我的Instagram：explorer1023";break;
         case "4":msg="我的新浪：因为我係小仙女啊";break;
       }
        this.$alert(msg, '请关注', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
  }
}
</script>

<style scoped>
.wrapper{
  width:1366px;
  height:638px;
  background:#D8D8D8;
  position:relative;
}
.bgImg{
  width:1366px;
  height:550px;
  position:absolute;
  left:50%;
  bottom:0;  
  margin-left:-683px;
  background:url(../static/images/bg-image.jpg) no-repeat center -5%;
}
.mark{
  width:1366px;
  height:550px;
  background:#fff;
  position:absolute;
  left:0;
  bottom:0;
  opacity:.5;
}
.bgImg p:first-child{
  width:450px;
  font-size:20px;
  position:absolute;
  left:50%;
  margin-left:-225px;
  top:45%;
  font-family:"宋体";
  color:#353535;
  z-index:5;
}
.bgImg p:first-child span{
  font-size:90px;
  color:#353535;
  z-index:4;
  border-bottom:2px solid #E84D49;
}
.bgImg p:last-child{
  width:500px;
  font-size:16px;
  color:#353535;
  position:absolute;
  left:50%;
  margin-left:-250px;
  top:65%;
  z-index:2;
  font-family:"微软雅黑";
  font-weight:bold;
  letter-spacing:.1rem;
}
.title_right{
  position:absolute;
  left:50%;
  margin-left:-600px;
  bottom:50px;
  font-size:15px;
  width:1200px;
  height:50px;
  line-height:50px;
  background:rgba(249,249,249,.8);
  z-index:3;
}
.title_right li{
  float:left;
  text-align:center;
  cursor:pointer;
  color:#353535;
  text-align:center;
}
.title_right li:hover{
  color:#E84D49;
}
#one{
  width:150px;
  height:100%;
  background:#353535;
  color:#fff;
  font-family:"宋体";
  letter-spacing:.2rem;
  font-size:23px;
}
#one:hover{
  text-decoration:underline;
}
.centerFont{
  margin-left:64px;
}
#centerFont{
  margin-left:230px;
}
.iconfont{
  margin-left:25px;
}
#theone{
  margin-left:190px;
}
.red{
  color:#E84D49;
}
#stay{
  font-size:33px;
  text-align:center;
  top:55%;
}
</style>
