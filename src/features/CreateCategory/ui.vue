<script lang="ts">
import Vue from 'vue'
import { SInput, SButton } from '@/shared'

export default Vue.extend({
    name: 'FCreateCategory',
    data: () => ({
        showModal: false
    }),
    components: { SInput, SButton },
    methods: {
        toggleCreateCategoryModal () {
            this.showModal = !this.showModal
        }
    }
})
</script>

<template>
    <div class="CreateCategory">
        <s-button @click="toggleCreateCategoryModal">Добавить категорию</s-button>
        <div
            v-if="showModal"
            class="create-category__modal"
        >
            <s-input
                placeholder="Заголовок категории"
            />
            <s-button>Добавить категорию</s-button>
        </div>
    </div>
</template>

<style scoped>
.create-category__modal {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    margin: auto;
    min-width: 320px;
    max-width: 640px;
    background: #fff;
    border: 2px solid #333333;
    padding: 16px;
}
</style>
