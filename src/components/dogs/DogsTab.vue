<template>
  <div class="p-4 max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center">
    <DogCard class="select-none" v-for="dog in dogs" :key="dog.name" :dog="dog" />
  </div>
</template>

<script setup lang="ts">
import DogCard from './DogCard.vue';
import { dogs } from '../../data/Dogs';
</script>
