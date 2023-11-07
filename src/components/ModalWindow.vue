<script setup>
import {useStarships} from '../stores/starships.js'
const starships = useStarships()
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Pilots</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-for="person in starships.people" :person="person" class="card">
                        <div class="card-body">
                            <h5 class="card-title">Name: {{ person.name }}</h5>
                            <p class="card-text">Height: {{ person.height }}</p>
                            <p class="card-text">Mass: {{ person.mass }}</p>
                            <p class="card-text">Hair color: {{ person.hair_color }}</p>
                            <p class="card-text">Skin color: {{ person.skin_color }}</p>
                            <p class="card-text">Eye color: {{ person.eye_color }}</p>
                            <p class="card-text">Birth year: {{ person.birth_year }}</p>
                            <p class="card-text">Gender: {{ person.gender }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-body{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
