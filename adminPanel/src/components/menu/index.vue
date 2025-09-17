<template>
    <div class="menu">
        <el-menu
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :default-openeds="[]"   
            menu-trigger="hover"    
            unique-opened
            @open="handleOpen"
            @close="handleClose"      
        >
            <!-- 一级菜单 -->
            <el-sub-menu
                v-for="(item, i) in menuList"
                :key="i"
                :index="`${i}`"
                >
                <template #title>
                    <el-icon v-if="item.icon">
                    <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.menuName }}</span>
                </template>

            <!-- 二级菜单 -->
            <template v-for="(subItem, j) in item.children">
                <!-- 如果有 children，渲染成 sub-menu -->
                <el-sub-menu
                    v-if="subItem.children && subItem.children.length"
                    :index="`${i}-${j}`"
                    :key="`${i}-${j}`"
                >
                    <template #title>
                        <span>{{ subItem.menuName }}</span>
                    </template>

                    <!-- 三级菜单 -->
                    <el-menu-item
                        v-for="(threeItem, k) in subItem.children"
                        :key="`${i}-${j}-${k}`"
                        :index="`${i}-${j}-${k}`"
                    >
                        {{ threeItem.menuName }}
                    </el-menu-item>
                </el-sub-menu>

                <!-- 如果没有 children，就渲染成普通菜单项 -->
                <el-menu-item
                    v-else
                    :index="`${i}-${j}`"
                    :key="`${i}-${j}`"
                >
                    {{ subItem.menuName }}
                </el-menu-item>
            </template>
            </el-sub-menu>
        </el-menu>
        <el-icon class="arrow-icon" @click="changeCollapse">
            <DArrowRight v-if="isCollapse" />
            <DArrowLeft v-else />
        </el-icon>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Location,
  DArrowRight,
  DArrowLeft,
} from '@element-plus/icons-vue'

defineProps({
    menuList: {
        type: Array,
        default: ()=>[{
            menuName: '测试1',
            icon: Location,
            children: [{
                menuName: '子集1',
            },{
                menuName: '子集2',
                children: [{
                    menuName: 'test11'
                }]
            }]
        }]
    }
})

const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const changeCollapse = () => {
    isCollapse.value = !isCollapse.value;
}
</script>

<style lang="less" scoped>
.menu {
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    .arrow-icon {
        width: 35px;
        height: 35px;
        border: 1px solid var(--el-menu-border-color);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-left: 0;
        cursor: pointer;
    }
}
.el-menu-vertical-demo {
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;  
}
</style>