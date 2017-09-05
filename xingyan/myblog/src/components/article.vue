<template>
    <div class="article">
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题：">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="一级分类：">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="二级分类：">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="作者：">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="推荐：">
   <el-radio-group v-model="form.resource">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="状态：">
    <el-radio-group v-model="form.resource">
      <el-radio label="显示"></el-radio>
      <el-radio label="隐藏"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="时间">
        <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="导读">
        <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">发布</el-button>
    <el-button>保存到草稿箱</el-button>
  </el-form-item>
</el-form>
    </div>

</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
    .article{
        width:400px;
        margin-top:20px;
    }
</style>
