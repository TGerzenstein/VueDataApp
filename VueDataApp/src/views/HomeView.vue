<script setup lang="ts">

import ListProducts from '../components/ListProducts.vue'

import { onMounted, ref } from 'vue'
import axios from 'axios'
import type { Product } from '../models/products.model'


const products = ref<Product[]>([]);

onMounted(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {products.value = response.data})
      .catch(error => { console.error('Error:', error) })

    })

</script>

<template>
    <header class="flex h-12 bg-blue-700 px-4">
      <form action="" class="flex m-auto max-w-screen-xl flex-1">
        <input name="search" class="bg-white h-8 flex-1 mr-2 px-2" type="text" placeholder="Search"
          >
        <button class="bg-gray-300 px-2 py-1">
          Search
        </button>
      </form>
    </header>
    <main>
      <div class="container mx-auto px-4 max-w-screen-xl">
      <ListProducts :products="products" />

      </div>
    </main>
</template>