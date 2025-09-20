<template>
    <div class="home-container">
        <navigationBar :navList="navList"></navigationBar>
        <selectForm class="select-form" :search="search" :searchList="searchList" @submitForm="submitForm"></selectForm>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" align="center" label="Date" width="180" />
            <el-table-column prop="name" align="center" label="Name" width="180" />
            <el-table-column prop="address" align="center" label="Address" />
            <el-table-column label="operate" align="center">
                <template #default="scope">
                    <el-button type="text" @click="handleEdit(scope.row.id)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <paginationComponent :pageInfo="pageInfo" @paginationChange="paginationChange"></paginationComponent>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useHomeData } from '../stores/homeData'
const navList = ref([{
    navName: '测试1'
}]);
let search = ref({});
const router = useRouter();
let pageInfo = ref({
    currentPage: 1,
    pageSize: 10,
    totalCount: 0
})
const searchList = [{
    type: 'input',
    searchName: '姓名',
    key: 'name',
},{
    type: 'select',
    searchName: '性别',
    key: 'gender',
    value: [{
        label: '男',
        value: 1
    },{
        label: '女',
        value: 2
    }]
},{
    type: 'date',
    searchName: '日期',
    key: 'dateTime',
    dateType: 'daterange',
    valueType: 'object', // 返回的数据类型，可选object,array,默认array,
    //数据类型逊object时必传valueStartKey，valueEndKey，以便组件回传值
    valueStartKey: 'startTime', 
    valueEndKey: 'endTime',
},{
    type: 'button',
    buttonType: 'primary',
    buttonName: '查询',
    func: 'search'
},{
    type: 'button',
    buttonType: '',
    buttonName: '重置',
    func: 'reset'
},{
    type: 'button',
    buttonType: 'primary',
    buttonName: '新增',
    func: 'add'
}]
let tableData = ref([]);
const homeData = useHomeData();

const submitForm = (type, query) => {
    console.log(type, search.value, query,'submit===')
    if(type=='reset'){
        search.value = {}
    }else if(type=='add') {
        router.push('/edit');
    }
}

const paginationChange = (page,size) => {
    console.log(page,size)
}

const handleEdit = (id) => {
    router.push(`/edit/${id}`);
}
onMounted(()=> {
    let {data, tableLength} = homeData.getData(pageInfo.value.currentPage, pageInfo.value.size);
    console.log(data, tableLength, 888)
    pageInfo.value.totalCount = tableLength;
    tableData.value = data;
})
</script>

<style lang="less" scoped>
    .home-container {
        padding: 20px;
        .select-form {
            padding-top: 20px;
        }
    }
</style>