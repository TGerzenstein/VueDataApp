<script setup lang="ts">
import { defineProps } from "vue";
import type { Product } from "../models/products.model";

interface Props {
    product: Product;
}

defineProps<Props>();
</script>

<template>
    <div class="px-6 py-4">
        <p class="m-1">{{ product.condition }}</p>
        <h3 class="font-bold text-xl mb-2">{{ product.title }}</h3>
        <p class="font-bold">{{ product.price }}</p>
        <p>{{ product.currency_id }}</p>
        <img class="mx-auto" :src="product.thumbnail" alt="products image" />
    </div>
</template>
