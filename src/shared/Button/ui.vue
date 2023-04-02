<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SButton',
    props: {
        type: {
            type: String,
            default: 'button'
        }
    }
})
</script>

<template>
    <button
        class="SButton"
        :type="type"
        @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style scoped>

</style>
