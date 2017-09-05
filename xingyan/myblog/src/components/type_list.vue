<template>
<div class="type_list">
  <table v-for="(item,i) in arr" :key="i">
    <thead>
      <tr>
        <td>一级类名：{{item.onedata.cnname}}</td>
        <td>标识：{{item.onedata.enname}}</td>
        <td>文章数量：</td>
        <td><button class="amend" @click="amend(item.id)">修改</button><button class="del" @click="del(item.onedata.id,item.enname)">删除</button></td>
      </tr>
    </thead>
     <tbody>
      <tr v-for="(value,ind) in item.twodata" :key="ind">
        <td>二级类名：{{value.cnname}}</td>
        <td>标识：{{value.enname}}</td>
        <td>文章数量：</td>
        <td><button class="amend" @click="amend(value.id)">修改</button><button class="del" @click="deletetwo(item.onedata.enname,item.onedata.id,value.id)">删除</button></td>
      </tr>
    </tbody> 
  </table>
</div>
 
</template>
<script>
  export default {
    data() {
      return {
        arr:[]
      }
    },
    mounted(){
      this.axios.get("http://localhost:3000/api/back_class/class_list").then((rs)=>{
        this.arr=rs.data.data;   
         
      })
     
    },
    methods:{
      del(id,enname){
        if(confirm("确定要删除么？")){
          this.axios.post("http://localhost:3000/api/back_class/delete_one",{
            id:id,
            enname_one:enname
          }).then((rs)=>{
            location.reload();
          })
        }else{
          return false;
        }
        
      },
      deletetwo(enname,oneid,twoid){
        if(confirm("确定删除二级类名？")){
          this.axios.post("http://localhost:3000/api/back_class/delete_two",{
            oneId:oneid,
            twoId:twoid,
            enname_one:enname
          }).then((rs)=>{     
            if(rs.data.code=="1071"){
              this.$message({
                message:rs.data.msg,
                type:"success"
              })
            }else{
              this.$message({
                message:rs.data.msg,
                type:"error"
              })
            }
          })
        }
        
      }
    }
  }
</script>
<style scoped>
  .type_list{
    width:900px;
    margin-top:30px;
  }
  .type_list table,tr,td{
    border:1px solid #ccc;
    border-collapse:collapse;
    padding: 0 5px;
  }
  .type_list td{
    width: 150px;
  }
  .type_list tr{
    height: 40px;
  }
  .type_list thead{
    background:lightblue;
    color: #fff;
  }
  .type_list tbody{
    background: lightgray;
  }
  .type_list button{
    width: 60px;
    height: 30px;
    outline: 0;
    border:0;
    border:1px solid #ccc;
    border-radius: 5px;
  }
  .del{
    background:red;
    color: #fff; 
    margin-left: 5px;
  }
  .amend{
    background: #fff;
  }
  table{
    margin-top: 10px;
  }
  table tbody{
    font-size: 13px;
  }
</style>
