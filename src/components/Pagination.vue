<script setup>
import {useStarships} from '../stores/starships.js'
const starships = useStarships()
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li v-for="(index, page) in starships.pageCount" class="page-item" :class="{ 'active': index === starships.page }" @click="starships.anotherPage(index)"><a class="page-link" href="#">{{ index }}</a></li>
        </ul>
    </nav>
</template>

<style scoped></style>
