<template>
  <div class="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    <CatCard class="select-none" v-for="cat in cats" :key="cat.name" :cat="cat" />
  </div>
</template>

<script setup lang="ts">
import CatCard from './CatCard.vue';
import { cats } from '../../data/Cats';
</script>
