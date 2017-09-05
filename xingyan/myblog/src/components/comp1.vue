<template>
  <div class="comp1">
    <el-col :span="8">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <router-link to="/main/type_list" style="text-decoration:none">
              <el-menu-item index="1-1">分类列表</el-menu-item>
            </router-link>
            <router-link to="/main/article" style="text-decoration:none">
              <el-menu-item index="1-2">文章管理</el-menu-item>
            </router-link>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
          <router-link to="/main/add_classtwo" style="text-decoration:none">
            <el-menu-item index="1-3">添加二级类名</el-menu-item>
          </router-link>
            
          </el-menu-item-group> 
        </el-submenu>
        <router-link to="/main/child" style="text-decoration:none">
          <el-menu-item index="2"><i class="el-icon-view"></i>一级类名设置</el-menu-item>
        </router-link>
        <router-link to="/main/add_api" style="text-decoration:none">
          <el-menu-item index="3"><i class="el-icon-picture"></i>增加接口文档</el-menu-item>
        </router-link>
        <router-link to="/main/api_list_font" style="text-decoration:none">
          <el-menu-item index="4"><i class="el-icon-star-off"></i>前台接口列表</el-menu-item>
        </router-link>
        <router-link to="/main/api_list_back" style="text-decoration:none">
          <el-menu-item index="5"><i class="el-icon-star-on"></i>后台接口列表</el-menu-item>
        </router-link>
        
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comp1{
    width:500px;
    
  }
</style>
