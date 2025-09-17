<template>
    <el-form :model="query" :inline="true" class="form-line">
        <el-form-item 
            v-for="(item,i) in props.searchList"
            :label="item.searchName"
            :key="i"
            :class="{
                'mr15': item.type=='button'
            }"
        >
            <!-- input -->
            <template v-if="item.type=='input'">
                <el-input v-model="query[item.key]" :placeholder="item.placeholder || '请输入'" clearable />
            </template>
            <!-- select -->
            <template v-else-if="item.type=='select'">
                <el-select
                    v-model="query[item.key]" 
                    :placeholder="item.placeholder || '请选择'"
                    clearable
                >
                    <el-option 
                        v-for="(option,j) in item.value"
                        :key="j"
                        :label="option.label" 
                        :value="option.value" />
                </el-select>
            </template>
            <!-- date -->
            <template v-else-if="item.type=='date'">
                <el-date-picker
                    v-model="query[item.key]"
                    :type="item.dateType"
                    value-format="YYYY-MM-DD HH:mm:ss"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="defaultTime"
                    clearable
                    @change="changeDate(item)"
                />
            </template>
             <!-- button -->
            <template v-else-if="item.type=='button'">
                <el-button
                    :type="item.buttonType"
                    @click="clickButton(item)"
                >{{ item.buttonName }}</el-button>
            </template>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive,ref, watch } from 'vue';
const props = defineProps({
    search: {
        type: Object,
        required: true,
    }, 
    searchList: {
        type: Array,
        required: true,
    }
})
const emit = defineEmits(['submitForm'])

let query = reactive(JSON.parse(JSON.stringify(props.search)));

watch(props,(newV)=>{
    query = reactive(JSON.parse(JSON.stringify(newV.search)));
})
const defaultTime = ref([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
]);
const changeDate = (item) => {
    let value = query[item.key]
    if(item.valueType.toLocaleLowerCase() == 'object' && value){
        query[item.valueStartKey] = value[0];
        query[item.valueEndKey] = value[1];
    }
}

const clickButton = (item) => {
    emit('submitForm', item.func, query);
}
</script>

<style lang="less" scoped>
.form-line .el-select {
  --el-select-width: 220px;
}
.form-line .el-input {
  --el-select-width: 220px;
}
.mr15 {
    margin-right: 15px;
}
</style>