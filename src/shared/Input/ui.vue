<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SInput'
})
</script>

<template>
    <div class="SInput">
        <input type="text" @input="$emit('input')" />
    </div>
</template>

<style scoped>

</style>
