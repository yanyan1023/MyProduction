<template>
  <div class="article_details">
    <div class="wrapper">
      <router-link to="/MyArticle" class="backToLast"><i class="el-icon-arrow-left"></i>返回上页</router-link>
      <h2>{{title}}</h2>
      <h4>发布时间：{{time}}<span>编辑：{{editor}}个人博客网站</span><span>点击：9 </span></h4>
      <div class="articleContent">
        {{content}}
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      content:"",
      editor:null,
      time:"",
      title:""
    }
  },
  methods:{
    fn(v){
      this.content=v.content;
      this.title=v.article_name;
      this.editor=v.editer;
      this.time=v.time;
    }
    
  },
  beforeRouteEnter: (to, from, next) => {
    
    next(v=>{
      v.fn(to.params);
    });
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article_details{
    width:1366px;
    height:auto;
    position:absolute;
    top:0;
    left:0;
    background:#F5F5D5;
    z-index:6;
}
.wrapper{
  width:800px;
  height:100%;
  min-height:700px;
  background:#F1F0EE;
  margin:0 auto;
  padding-top:50px;
}
.backToLast{
  font-size:17px;
  line-height:33px;
  padding:0 10px;
}
.wrapper h2{
  font-size:25px;
  text-align:center;
  border-top:3px solid #AC0B0B;
  padding:10px 0;
  line-height:40px;
}
.wrapper h4{
  width:700px;
  height:30px;
  line-height:30px;
  margin:0 auto;
  text-align:center;
  border:1px dashed #ccc; 
}
.wrapper h4 span{
  margin:0 26px;
}
.articleContent{
  width:700px;
  height:auto;
  margin:40px auto;
  font-size:15px;
  line-height:27px;
}
</style>
