<script setup lang="ts">

import { defineProps } from 'vue';
import type { Product } from '../models/products.model'
import  ProductDescription from './ProductDescription.vue'

interface Props {
    products: Product[];
}

defineProps<Props>();
</script>


<template>
      <section>

        <ul class="flex flex-wrap">
           <li  class="w-64 max-w-sm rounded border overflow-hidden shadow-lg m-2"
                v-for="product in products"
           >
           <ProductDescription :product="product" />
           </li>
        </ul>
      </section>
</template>