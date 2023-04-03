<script lang="ts">
import Vue from 'vue'
import { range } from './utils'

export default Vue.extend({
    name: 'WPagination',
    props: {
        total: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    computed: {
        pages: function (): number[] {
            const pagesCount = Math.ceil(Number(this.total) / Number(this.limit))
            return range(1, pagesCount)
        },
        goForward () {
            return `${Number(this.currentPage) + 1}`
        },
        goPrev () {
            return `${Number(this.currentPage) - 1}`
        },
        stopForward () {
            return Number(this.currentPage) + 1 <= (this as any).pages.length
        },
        stopPrev () {
            return this.currentPage >= 2
        }
    }
})
</script>

<template>
    <div class="WPagination">
        <router-link
            class="pagination-link"
            :to="{ path: url, query: { page:goPrev } }"
            :disabled="!stopPrev"
            :event="stopPrev ? 'click' : ''"
        >
            Назад
        </router-link>
        <ul class="pagination">
            <li
                v-for="page in pages"
                :key="page"
            >
                <router-link
                    class="pagination-link"
                    :to="{ path: url, query: { page:page } }">
                    {{ page }}
                </router-link>
            </li>
        </ul>

        <router-link
            class="pagination-link"
            :to="{ path: url, query: { page:this.goForward } }"
            :disabled="!stopForward"
            :event="stopForward ? 'click' : ''"
        >
            Далее
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.WPagination {
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
.pagination-link {
}
.pagination {
    padding: 0;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
}
</style>
