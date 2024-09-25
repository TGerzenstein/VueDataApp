<script setup lang="ts">

import PageHeader from './components/PageHeader.vue';
import ListProducts from './components/ListProducts.vue'

import { onMounted, ref } from 'vue';
import axiosClient from './utils/axios';

import type { Product } from './models/products.model'


const products = ref<Product[]>([]);
const search = ref("");
const filteredProducts = ref<Product[]>([]);



//Get products
const fetchProducts = async() => {
    try {
      const { data } = await axiosClient.get("/search?q=tecnologia");
      products.value = data.results; 
      filteredProducts.value = products.value; 
      console.log('componente ejecutado')  

    } catch(error) {
      console.log(error);
    }
  }


const filterProducts = () => {
    filteredProducts.value = products.value.filter((product) => 
    product.title.toLowerCase().includes(search.value.trim().toLocaleLowerCase())
    );
};

onMounted(() => {
      fetchProducts();
  });


</script>




<template>
      <header class="flex h-12 bg-yellow-300 px-4">
        <form action="" class="flex m-auto max-w-screen-xl flex-1">
            <input name="search" 
                    class="bg-white h-8 flex-1 mr-2 px-2" 
                    type="text"
                    placeholder="Search products"
                    v-model="search"
                    @input="filterProducts"
                    >
                    <button class="bg-gray-300 px-2 py-1 text-slate-700">
                Search
            </button>
        </form>
    </header>
<!--     <PageHeader /> -->

    <div class="container mx-auto px-4 max-w-screen-xl">
        <ListProducts :products="filteredProducts.length > 0 ? filteredProducts : products" />

    </div>  
</template>

