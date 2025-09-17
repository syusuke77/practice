<template>
    <container>
        <template v-slot:header>
            <div class="header">demo</div>
        </template>
        <template v-slot:content>
            <menuComponent></menuComponent>
            <RouterView></RouterView>
        </template>
    </container>
</template>

<script setup>
    import container from '@/components/container/index.vue';
    import menuComponent from '@/components/menu/index.vue';
    import { RouterView } from 'vue-router'
</script>

<style lang="less" scoped>
    .header {
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        color: @white-color;
        background-color: @theme-color;
    }
</style>
