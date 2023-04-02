<template>
    <div class="app">
        <main-page />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainPage from '@/pages/MainPage.vue'

export default Vue.extend({
    name: 'App', components: { MainPage }
})
</script>

<style lang="scss">
@import "styles/index.scss";
</style>
