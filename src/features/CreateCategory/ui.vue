<script lang="ts">
import Vue from 'vue'
import { SButton } from '@/shared'
import CreateCategoryModal from '@/features/CreateCategory/CreateCategoryModal.vue'
import { TCategory } from '@/entities/Category/models'

export default Vue.extend({
    name: 'FCreateCategory',
    data: () => ({
        showModal: false
    }),
    components: { CreateCategoryModal, SButton },
    methods: {
        toggleCreateCategoryModal () {
            this.showModal = !this.showModal
        },
        createCategory (category: TCategory) {
            this.$store.dispatch('createCategory', category)
        }
    }
})
</script>

<template>
    <div class="CreateCategory">
        <s-button @click="toggleCreateCategoryModal">Добавить категорию</s-button>
        <transition name="bounce">
            <create-category-modal
                v-if="showModal"
                @closeModal="toggleCreateCategoryModal"
                @create="createCategory($event)"
            />
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
