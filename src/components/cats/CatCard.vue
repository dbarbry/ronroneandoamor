<template>
  <div
    class="rounded-xl shadow-md p-4 transition-transform hover:scale-105 border"
    :style="{ backgroundColor: cat.color, borderColor: cat.color }"
  >
    <img :src="cat.image" alt="Foto del gato" class="w-full h-48 object-cover rounded-md mb-4" />
    <h2 class="text-xl font-bold">{{ cat.name }}</h2>
    <p class="text-sm text-gray-600 italic">{{ cat.description }}</p>
    <div class="text-sm mt-2">
      <p><strong>Edad:</strong> {{ cat.age }} años</p>
      <p><strong>Cumpleaños:</strong> {{ formatDate(cat.birthday) }}</p>
      <p><strong>Desde:</strong> {{ formatDate(cat.since) }}</p>
      <p class="mt-2 text-green-600 font-semibold" v-if="cat.toAdopt">🐾 ¡Disponible para adopción!</p>
      <p class="mt-2 text-gray-500 italic" v-else>Ya adoptado ❤️</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Animal } from '../../types/Animal';

defineProps<{
  cat: Animal;
}>();

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString();
}
</script>
