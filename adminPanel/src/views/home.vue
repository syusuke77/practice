<template>
    <div class="home-container">
        <navigationBar :navList="navList"></navigationBar>
        <selectForm class="select-form" :search="search" :searchList="searchList" @submitForm="submitForm"></selectForm>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
        <paginationComponent :pageInfo="pageInfo" @paginationChange="paginationChange"></paginationComponent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const navList = ref([{
    navName: '测试1'
}]);
let search = ref({});
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
}]

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const submitForm = (type, query) => {
    console.log(type, search.value, query,'submit===')
    if(type=='reset'){
        search.value = {}
    }
}

const paginationChange = (page,size) => {
    console.log(page,size)
}
</script>

<style lang="less" scoped>
    .home-container {
        padding: 20px;
        .select-form {
            padding-top: 20px;
        }
    }
</style>