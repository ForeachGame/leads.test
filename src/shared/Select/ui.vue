<script lang="ts">
import Vue from 'vue'
import VueSelect from 'vue-select'

export default Vue.extend({
    name: 'SSelect',
    components: { VueSelect },
    props: {
        options: {
            type: Array,
            required: true
        },
        multiple: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
})
</script>

<template>
    <div class="SSelect">
        <div v-if="label">{{ label }}</div>
        <vue-select
            :key="value"
            :multiple="multiple"
            :label="text"
            :options="options"
            @option:selecting="$emit('selected', $event)"
            @option:deselected="$emit('deselected', $event)"
        />
    </div>
</template>

<style lang="scss" scoped>
@import 'vue-select/dist/vue-select.css';
</style>
