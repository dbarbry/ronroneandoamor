<template>
  <div class="min-h-screen bg-pink-50 text-gray-800">
    <!-- Navbar -->
    <nav class="bg-white shadow-md py-4 px-6 flex justify-between items-center select-none relative">
      <h1 class="text-2xl font-bold text-pink-700">Ronroneando Amor 🐾</h1>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-4">
        <button @click="switchTab('updates')" class="hover:text-pink-600">Actualizaciones</button>
        <button @click="switchTab('cats')" class="hover:text-pink-600">Gatitos</button>
        <button @click="switchTab('dogs')" class="hover:text-pink-600">Perritos</button>
        <button @click="switchTab('about')" class="hover:text-pink-600">Sobre Nosotros</button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden relative">
        <button @click="menuOpen = !menuOpen" class="text-gray-600 hover:text-pink-600 text-3xl leading-none">
          ⋮
        </button>

        <!-- Mobile Dropdown -->
        <div
          v-if="menuOpen"
          class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50"
        >
          <button @click="switchTab('updates')" class="block w-full text-left px-4 py-2 hover:bg-pink-100">
            Actualizaciones
          </button>
          <button @click="switchTab('cats')" class="block w-full text-left px-4 py-2 hover:bg-pink-100">
            Gatitos
          </button>
          <button @click="switchTab('dogs')" class="block w-full text-left px-4 py-2 hover:bg-pink-100">
            Perritos
          </button>
          <button @click="switchTab('about')" class="block w-full text-left px-4 py-2 hover:bg-pink-100">
            Sobre Nosotros
          </button>
        </div>
      </div>
    </nav>

    <!-- Tab Content -->
    <div class="p-6 max-w-7xl mx-auto">
      <UpdatesTab v-if="currentTab === 'updates'" />
      <CatsTab v-else-if="currentTab === 'cats'" />
      <DogsTab v-else-if="currentTab === 'dogs'" />
      <AboutUsTab v-else-if="currentTab === 'about'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UpdatesTab from './components/updates/UpdatesTab.vue'
import CatsTab from './components/cats/CatsTab.vue'
import DogsTab from './components/dogs/DogsTab.vue'
import AboutUsTab from './components/about/AboutTab.vue'

const currentTab = ref<'updates' | 'cats' | 'dogs' | 'about'>('updates')
const menuOpen = ref(false)

function switchTab(tab: 'updates' | 'cats' | 'dogs' | 'about') {
  currentTab.value = tab
  menuOpen.value = false // close mobile menu after selection
}
</script>

<style>
/* No custom CSS needed for now */
</style>
