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
        },
        label: {
            type: String,
            default: ''
        }
    }
})
</script>

<template>
    <div class="SInput">
        <div v-if="label">{{ label }}</div>
        <input
            v-model="value"
            type="text"
            :placeholder="placeholder"
            @input="$emit('input', value)"
        />
    </div>
</template>

<style scoped>
input {
    flex-grow: 1;
    font-size: var(--vs-font-size);
    line-height: var(--vs-line-height);
    margin: 4px 0 0;
    max-width: 100%;
    outline: none;
    z-index: 1;
    background: var(--vs-search-input-bg);
    border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    border-radius: var(--vs-border-radius);
    display: flex;
    padding: 7px;
    white-space: normal;
    width: 100%;
}
</style>
