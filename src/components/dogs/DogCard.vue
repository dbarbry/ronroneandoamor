<template>
  <div
    class="rounded-xl shadow-md p-4 transition-transform hover:scale-105 border"
    :style="{ backgroundColor: dog.color, borderColor: dog.color }"
  >
    <img :src="dog.image" alt="Foto del perro" class="w-full h-48 object-cover rounded-md mb-4" />
    <h2 class="text-xl font-bold">{{ dog.name }}</h2>
    <p class="text-sm text-gray-600 italic">{{ dog.description }}</p>
    <div class="text-sm mt-2">
      <p><strong>Edad:</strong> {{ dog.age }} años</p>
      <p><strong>Cumpleaños:</strong> {{ formatDate(dog.birthday) }}</p>
      <p><strong>Desde:</strong> {{ formatDate(dog.since) }}</p>
      <p class="mt-2 text-green-600 font-semibold" v-if="dog.toAdopt">🐾 ¡Disponible para adopción!</p>
      <p class="mt-2 text-gray-500 italic" v-else>Ya adoptado ❤️</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Animal } from '../../types/Animal';

defineProps<{
  dog: Animal;
}>();

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString();
}
</script>
