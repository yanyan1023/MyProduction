<template>
  <div class="child">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <h3>一级类名选择</h3>
    <el-form-item label="中文类名">
        <el-select v-model="ruleForm2.oneid" placeholder="请选择活动区域">
            <el-option v-for="(item,i) in classOnelist" :key="i" :label="item.cnname" :value="item.id"></el-option>
        </el-select>
    </el-form-item>
    <h3>二级类名设置</h3>
    <el-form-item label="中文类名" prop="cn">
        <el-input type="text" v-model="ruleForm2.cnname_two" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="英文类名" prop="entwo">
        <el-input v-model.number="ruleForm2.enname_two"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
        data() {
            var en = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            var entwo = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    //console.log(this.ruleForm2.enname_two)
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_two)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            return {
                classOnelist:[],
                ruleForm2: {
                    oneid:"",
                    cnname_two: "",
                    enname_two: "",
                },
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    en: [{
                        validator: en,
                        trigger: 'blur'
                    }],
                    entwo: [{
                        validator: entwo,
                        trigger: 'blur'
                    }]
                }
            };
        },
        created(){
            this.axios.get("http://localhost:3000/api/back_class/select_one_class").then((rs)=>{
                if(rs.data.code=="1021"){
                    this.classOnelist=rs.data.data;
                }
            })
        },
        methods: {
            submitForm(formName) {//提交按钮
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post("http://localhost:3000/api/back_class/add_two_class",this.ruleForm2).then((rs)=>{
                            //console.log(this.ruleForm2)
                            if(rs.data.code=="1032"){
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
                        
                       
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {//重置按钮
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child{
  width:40%;
}
.child h3{
  line-height:50px;
}
</style>
