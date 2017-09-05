<template>
  <div id="app">
    <div class="box">
        <p class="top_title">请登录</p>
        <ul class="formUl">
          <li v-focus:test="loginname">
            <span>用户名：</span>
            <p><input type="text" placeholder="请输入您的用户名" v-model.lazy="loginname.val"></p>
            <p style="color:red" class="error" v-if="loginname.state">{{loginpwd.errorMsg}}</p>
          </li>
          <li v-focus:required="loginpwd">
            <span>密码：</span>
            <p><input type="password" placeholder="请输入您的密码" v-model.lazy="loginpwd.val" @blur="fn(loginpwd)"></p>
            <p style="color:red" class="error" v-if="loginpwd.state">{{loginpwd.errorMsg}}</p>
          </li>
        </ul>
        <div class="btn" @click="submitBtn">登录</div>
        
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      loginname:{
        val:"",
        errorMsg:"输入的用户名格式不正确",
        blur:false,
        state:false,
        test:/[a-zA-Z]+$/
      },
      loginpwd:{
        val:"",
        errorMsg:"输入的密码格式不正确",
        blur:false,
        state:false,
        test:/^[a-zA-Z0-9]{4,10}$/
      }
    }
  },
  methods:{
    submitBtn(){//点击登录按钮
      if (!this.loginpwd.state && !this.loginname.state && this.loginpwd.val != "" && this.loginname.val != ""){
        this.axios.post("http://localhost:3000/api/back_class", {
              loginname: this.loginname.val,
              loginpwd: this.loginpwd.val       
        }).then((data)=>{ 
            this.$message(data.data.msg);
            if(data.data.code=="1001"){//登陆成功
              sessionStorage.setItem("userid",data.data.userid); 
              sessionStorage.setItem("username",this.loginname.val); 
              this.$router.push('/main');
            }
        })
      }else {
          alert("请正确填写用户名密码")
      }
      
    },
    fn(v){
        v.blur=true;
    }
  },
  directives:{
    focus:{
      componentUpdated(el,options,vnode,oldVnode){
        var $testState=options.value.test.test(options.value.val);//正则验证
        if(options.value.val!=""){//非空验证
          if($testState){//如果通过验证
            options.value.state=false;
          }else{//没通过正则验证
            options.value.state=true;
          }
        }else{//如果为空
          if(options.arg=="required" && options.value.blur){//如果是密码框为空
            options.value.state=true;
            options.value.errorMsg="密码不能为空"
          }else{//如果不是
            options.value.state=false;
            options.value.errorMsg="输入的密码格式不正确";
          }
        }
      }
    }
  }
}
</script>

<style>
  #app{
    width:1365px;
    height:620px;
    background:url(../../assets/1.jpg) no-repeat;
    background-size:100%;
  }
  .error{
    margin-left:10px;
    position:absolute;
    bottom:-24px;
    left:120px;
    font-size:13px;
    
  }
  .box{
    width:400px;
    height:300px;
    border:1px solid #ccc;
    background:rgba(0,0,0,.6);
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-200px;
    margin-top:-150px;
  }
  .top_title{
    font-size:23px;
    color:#ccc;
    line-height:50px;
    letter-spacing:.5rem;
    text-align:center;
  }
 .formUl{
   width:100%;
 }
 .formUl li{
   width:100%;
   height:30px;
   display:flex;
   padding:0 40px;
   margin:30px 0;
   color:#fff;
   box-sizing:border-box;
   position:relative;
 }
 .formUl li span{
   display:inline-block;
   width:90px;
 }
 .formUl li p{
   width:60%;
   border-radius:5px;
   overflow:hidden;
 }
 .formUl li input{
   height:30px;
   width:100%;
   border:0;
   outline:0;
   padding:0 3px;
   box-sizing:border-box;
 }
 .btn{
   width:197px;
   height:40px;
   color:#fff;
   line-height:40px;
   text-align:center;
   background:linear-gradient(#527D9D, #ACAFB1);
   border-radius:5px;
   position:absolute;
   top:200px;
   left:126px;
   cursor:pointer;
 }
</style>
