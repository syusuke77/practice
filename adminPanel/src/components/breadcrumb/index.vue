<template>
    <el-breadcrumb separator="/">
        <template 
            v-for="(item, i) in props.navList"
        >
            <el-breadcrumb-item
                :key="i"
                v-if="!item.toPath"
            >
                {{  item.navName  }}
            </el-breadcrumb-item>
            <el-breadcrumb-item 
                v-else
                :key="`toPath-${i}`"
                :to="item.toPath"
            >
                {{  item.navName  }}
            </el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>

<script setup>
const props=defineProps({
    navList: {
        type: Array,
    }
})
</script>

<style lang="less" scoped>
.el-breadcrumb {
    :deep(.el-breadcrumb__item) {
        .el-breadcrumb__inner {
            font-weight: normal;
        }
    }
    :deep(.el-breadcrumb__item):last-child {
        .el-breadcrumb__inner {
            font-weight: bold;
            color: @black-color;
        }
    }
}
</style>
