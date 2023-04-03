<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'ECategory',
    props: {
        id: Number,
        title: String
    }
})
</script>

<template>
    <div class="ECategory">
        <div>{{ title }}</div>
    </div>
</template>

<style scoped>

</style>
