<template>
  <div class="article">
  <router-link to="/" class="backToLast"><i class="el-icon-arrow-left"></i>返回上页</router-link>
    <h1>欢迎来到我的文章，你的心<span><img src="../../static/images/img/22.jpg" alt="">我是毒鸡汤姐姐：小仙女</span></h1>
    <div class="articleContent">
      <p>最新文章</p>
      <ul>
        <router-link :to="{name:'article_details',params:item}" v-for="(item,i) in everypage" :key="i">
         <li>{{item.article_name}}</li>
        </router-link>
        
      </ul>
      <div class="block">
         <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="alldata.length">
          </el-pagination>
      </div>
      <div class="aside">
        <h5 class="theNew">博客最新</h5>
        <ol>
          <li class="el-icon-star-off">TIOBE10月编程说话排行榜:GO染指今年度说话?</li>
          <li class="el-icon-star-off">盘货2016年互联网界产生的十大变乱</li>
          <li class="el-icon-star-off">一场小米勉为其难的发布会</li>
          <li class="el-icon-star-off">超给力！图文详解谷歌Android7.0的20个新成果</li>
        </ol>
        <h5 class="theNew commend">博客推荐</h5>
        <ol>
          <li class="el-icon-star-off">TIOBE10月编程说话排行榜:GO染指今年度说话?</li>
          <li class="el-icon-star-off">盘货2016年互联网界产生的十大变乱</li>
          <li class="el-icon-star-off">一场小米勉为其难的发布会</li>
          <li class="el-icon-star-off">超给力！图文详解谷歌Android7.0的20个新成果</li>
          <li class="el-icon-star-off">盘货2016年互联网界产生的十大变乱</li>
          <li class="el-icon-star-off">一场小米勉为其难的发布会</li>
          <li class="el-icon-star-off">超给力！图文详解谷歌Android7.0的20个新成果</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
      alldata:"",
      currentPage4: 0, //当前显示页
      everypagelist: 5, //默认每页显示条数
      everypage: [] //每页的数据
    }
  },
  created(){
    this.axios.get("http://localhost:3000/api/back_article/getArticle").then(function(data) {
        this.alldata = data.data.data
       // console.log(this.alldata)
    }.bind(this))
  },
  methods:{
    handleSizeChange(val) {
        this.everypagelist = val
    },
    handleCurrentChange(val) {
        this.everypage = this.alldata.slice(this.everypagelist * (val - 1), this.everypagelist * val)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
        margin: 40px auto;
    }
    
    .block div {
        text-align: center
    }
.article{
    width:1366px;
    height:1000px;
    position:absolute;
    top:0;
    left:0;
    background:#F5F5D5;
    z-index:6;
}
.article h1{
  width:95%;
  font-size:25px;
  font-family:"楷体";
  padding:30px;
  text-align:center;
}
.article h1 span{
  font-size:15px;
  float:right;
}
.article h1 span img{
  width:40px;
  height:40px;
  border-radius:50%;
}
.articleContent{
  width:60%;
  margin:30px 60px;
}
.articleContent p{
  font-size:20px;
  line-height:33px;
  border-bottom:1px solid pink;
  margin-bottom:10px;
}

.articleContent ul li{
  width:400px;
  line-height:32px;
  font-size:14px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;  
}
.aside{
  width:250px;
  padding:0 0 20px ;
  background:#eee;
  position:absolute;
  right:90px;
  top:148px;
  border-radius:7px;
  box-shadow:4px 5px 3px #ccc;
}
.theNew{
  font-weight:bold;
  line-height:40px;
  text-indent:.4rem;
  font-size:15px;
  color:#000;
}
.aside ol{
  width:250px;
  margin-left:7px;
}
.aside ol li{
  width:230px;
  line-height:25px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;  
}
.commend{
  color:#AC0B0B;
}
.backToLast{
  font-size:16px;
  line-height:40px;
  text-indent:1.8rem;
}
</style>
