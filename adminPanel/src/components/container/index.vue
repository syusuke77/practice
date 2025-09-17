<template>
    <div :class="{
        container: true, 
        'fixed-container':isFixedContainer
    }">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        isFixedContainer: {
            type: Boolean,
            default: false
        },
        isFixedHeader: {
            type: Boolean,
            default: false
        }
    })
</script>


<style lang="less" scoped>
    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        .header {
            width: 100%;
        }
        .content {
            width: 100%;
            display: flex;
            flex: 1;
        }
    }
    .fixed-container {
        overflow: hidden;
        .content {
            overflow: auto;
        }
    }
</style>