<script setup lang="ts">

import { defineProps } from 'vue';
import type { Product } from '../models/products.model'


interface Props {
    products: Product[];
}

defineProps<Props>();
</script>


<template>
      <section>
          <ul class="flex flex-wrap">
            <li  class="w-64 max-w-sm rounded border overflow-hidden shadow-lg m-2" 
                v-for="product in products" :key="product.id">

              <div class="px-6 py-4">
                <p class="m-1">{{ product.condition }}</p>
                <h3 class="font-bold text-xl mb-2">{{ product.title }}</h3>
                <p class="font-bold">{{ product.price }}</p>
                <p>{{ product.currency_id }}</p>
              </div>
              <img :src="product.thumbnail" class="m-auto" alt="">      
            </li>
          </ul>
      </section>
</template>