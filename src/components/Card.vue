<script setup>
import {useStarships} from '../stores/starships.js'
const starships = useStarships()
const props = defineProps({
    starship: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Name: {{ starship.name }}</h5>
            <p class="card-text">Model: {{ starship.model }}</p>
            <p class="card-text">Manufacturer: {{ starship.manufacturer }}</p>
            <p class="card-text">Cost in credits: {{ starship.cost_in_credits }}</p>
            <p class="card-text">Length: {{ starship.length }}</p>
            <p class="card-text">Max atmosphering speed: {{ starship.max_atmosphering_speed }}</p>
            <p class="card-text">Crew: {{ starship.crew }}</p>
            <p class="card-text">Passengers: {{ starship.passengers }}</p>
            <p class="card-text">Cargo capacity: {{ starship.cargo_capacity }}</p>
            <p class="card-text">Consumables: {{ starship.consumables }}</p>
            <p class="card-text">Hyperdrive rating: {{ starship.hyperdrive_rating }}</p>
            <p class="card-text">MGLT: {{ starship.MGLT }}</p>
            <p class="card-text">Starship class: {{ starship.starship_class }}</p>
            <button v-if="starship.pilots.length === 0" href="#" class="btn btn-link disabled">Pilots</button>
            <button v-else @click="starships.getPeople(starship.pilots)" href="#" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Pilots</button>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 300px;
}
</style>
