<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'App',
    mounted () {
        if (this.$store.getters.getArticles.length === 0) this.$store.dispatch('getArticles')
    }
})
</script>

<template>
    <div class="app">
        <router-view />
    </div>
</template>

<style lang="scss">
@import "styles/index.scss";
</style>
