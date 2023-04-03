<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SInput',
    props: {
        placeholder: {
            type: String,
            default: ''
        }
    }
})
</script>

<template>
    <div class="SInput">
        <input
            type="text"
            :placeholder="placeholder"
            @input="$emit('input')"
        />
    </div>
</template>

<style scoped>

</style>
