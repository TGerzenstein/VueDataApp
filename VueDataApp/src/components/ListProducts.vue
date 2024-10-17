<script setup lang="ts">
import { defineProps } from "vue";
import type { Product } from "../models/products.model";
import ProductDescription from "./ProductDescription.vue";

interface Props {
  products: Product[];
}

defineProps<Props>();
</script>


<template>
  <div>
    <ul class="flex flex-wrap">
      <li
        class="w-64 max-w-sm rounded border overflow-hidden shadow-lg m-2"
        v-for="(product, index) in products" :key="index"
      >
        <p>{{ index + 1 }}</p>
        <p>text</p>
        
        <ProductDescription :product="product" :key="index"/>
      </li>
    </ul>
  </div>
</template>
