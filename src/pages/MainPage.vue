<script lang="ts">
import Vue from 'vue'
import { WNavbar, WCategories, WPagination } from '@/widgets'

export default Vue.extend({
    name: 'MainPage',
    components: { WNavbar, WCategories, WPagination }
})
</script>

<template>
    <div class="MainPage">
        <w-navbar />
        <w-categories />
        <w-pagination />
    </div>
</template>

<style scoped>

</style>
