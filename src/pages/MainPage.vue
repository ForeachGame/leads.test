<script lang="ts">
import Vue from 'vue'
import { WNavbar, WCategories, WArticles, WPagination } from '@/widgets'

export default Vue.extend({
    name: 'MainPage',
    components: { WNavbar, WCategories, WArticles, WPagination },
    data: () => ({
        limit: 8
    }),
    computed: {
        totalPages () {
            return this.$store.getters.getArticles.length
        },
        baseUrl () {
            return this.$route.path
        }
    }
})
</script>

<template>
    <div class="MainPage">
        <div class="header">
            <w-navbar />
        </div>
        <div class="content">
            <div class="left-side">
                <w-categories />
            </div>
            <div class="right-side">
                <w-articles
                    :limit="limit"
                />
                <w-pagination
                    :total="totalPages"
                    :limit="limit"
                    :current-page="Number(this.$route.query.page || '1')"
                    :url="baseUrl"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.MainPage {
    .header {

    }
    .content {
        display: grid;
        gap: 16px;
        grid-template-columns: 320px 1fr;
        padding: 20px;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
