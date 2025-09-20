<template>
    <div class="edit-container">
        <navigationBar :navList="navList"></navigationBar>
        <el-form :model="form" :rules="rules" label-width="100px" ref="formRef">
            <el-form-item label="Date" prop="date">
                <el-date-picker
                v-model="form.date"
                type="date"
                value-format="YYYY-MM-DD"
                placeholder="Pick a date"
                style="width: 100%"
                />
            </el-form-item>
            <el-form-item label="Name" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Address">
                <el-input v-model="form.address" type="textarea" :rows="3"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit" :loading="loading">确定</el-button>
                <el-button @click="goBack">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { ref,reactive, onMounted } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useHomeData } from '../stores/homeData'
const router = useRouter();
const {params: { id }} = useRoute();
let navList = ref([{
    navName: '测试1',
    toPath: '/'
},{
    navName: '新增',
}]);
let form = ref({});
const homeData = useHomeData();
let loading = ref(false);
const formRef = ref(null);
const rules = reactive({
    date: [{required: true, message: 'Please select date', trigger: 'chagne'}],
    name: [{required: true, message: 'Please input name', trigger: 'blur'}],
})
const generateRandomId = () =>{
  let timestamp = Date.now().toString(); // 获取当前时间戳
  let randomNum = Math.random().toString().slice(2, 8); // 获取0.后面的6位随机数
  return timestamp + randomNum;
}
const submit = async () => {
    try {
        if (!formRef.value) return
        loading.value = true
        await formRef.value.validate(valid=>{
            if(valid) {
                if(id) {
                    homeData.modifyData(id, form.value);
                }else{
                    form.value.id = generateRandomId();
                    homeData.pushData(form.value);
                }
                ElMessage.success('保存成功');
                goBack();
            }
            loading.value = false;
        })
    } catch (error) {
        console.log(error)
    }
}

const goBack = () => {
    router.go(-1);
}
onMounted(() => {
    if(id) {
        form.value = homeData.getDetail(id) ?? {};
        console.log(form.value);
        navList.value[1].navName = '编辑';
    }
})
</script>

<style lang="less" scoped>
.edit-container {
    width: 100%;
    padding: 20px;
    .el-form {
        width: 50%;
        padding-top: 20px;
    }
}

</style>