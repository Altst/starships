<script setup>
import { onMounted } from 'vue';
import Card from './components/Card.vue'
import Pagination from './components/Pagination.vue'
import {useStarships} from './stores/starships.js'
import ModalWindow from './components/ModalWindow.vue';
const starships = useStarships()
onMounted(async ()=>{
  starships.getStarships()
})
</script>

<template>
  <div class="card-items">
    <Card v-for="item in starships.starshipsArr" :starship="item"/>
  </div>
  <div class="pagination-item">
    <Pagination/>
  </div>
  <ModalWindow/>
</template>

<style scoped>
  .card-items{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .pagination-item{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }
</style>
