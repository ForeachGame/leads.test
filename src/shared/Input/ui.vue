<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SInput',
    data: () => ({
        value: ''
    }),
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
            v-model="value"
            type="text"
            :placeholder="placeholder"
            @input="$emit('input', value)"
        />
    </div>
</template>

<style scoped>

</style>
