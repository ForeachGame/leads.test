<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SButton',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        border: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        noPadding: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<template>
    <button
        :class="['SButton', border && 'border', noPadding && 'no-padding']"
        :type="type"
        :disabled="disabled"
        @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    flex-grow: 1;
    font-size: var(--vs-font-size);
    line-height: var(--vs-line-height);
    margin: 4px 0 0;
    max-width: 100%;
    outline: none;
    z-index: 1;
    background: var(--vs-search-input-bg);
    display: flex;
    white-space: normal;
    cursor: pointer;
    border: none;
    padding: 7px;
    justify-content: center;
    &.border {
        border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
        border-radius: var(--vs-border-radius);
    }
    &.no-padding {
        padding: 0;
        margin: 0;
    }
    &:active {
        border-color: #aaa;
    }
    &:hover {
        border-color: #333333;
    }
    &:disabled {
        border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    }
}
</style>
