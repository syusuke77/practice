<template>
    <el-pagination
        v-if="props.pageInfo.totalCount"
        class="pagination"
        v-model:current-page="props.pageInfo.currentPage"
        v-model:page-size="props.pageInfo.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="props.pageInfo.totalCount"
        @size-change="(val)=>paginationChange(val, 'size')"
        @current-change="(val)=>paginationChange(val, 'pgae')"
    />
</template>

<script setup>

const props = defineProps({
    pageInfo: {
        type: Object,
        required: true,
        // {
        //     currentPage: 1,
        //     pageSize: 10,
        //     totalCount: 0
        // }
    }
})

const emit = defineEmits(['paginationChange']);

const paginationChange = (val, type) => {
    emit('paginationChange', props.pageInfo.currentPage, props.pageInfo.pageSize);
}
</script>

<style lang="less" scoped>
.pagination {
    display: flex;
    justify-content: end;
    margin-top: 20px;
}
</style>