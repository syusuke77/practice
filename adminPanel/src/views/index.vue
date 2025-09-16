<template>
    <container>
        <template v-slot:header>
            <div class="header">demo</div>
        </template>
        <template v-slot:content>
            <menuComponent></menuComponent>
        </template>
    </container>
</template>

<script setup>
    import container from '@/components/container/index.vue';
    import menuComponent from '@/components/menu/index.vue';
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
