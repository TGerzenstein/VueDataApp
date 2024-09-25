<script setup lang="ts">

import PageHeader from './components/PageHeader.vue';
import ListProducts from './components/ListProducts.vue'
import ProductDescription from './components/ProductDescription.vue'

import { onMounted, ref } from 'vue';
import axiosClient from './utils/axios';

import type { Product } from './models/products.model'


const products = ref<Product[]>([]);

//Get products
const fetchProducts = async() => {
    try {
      const { data } = await axiosClient.get("/search?q=tecnologia");
      products.value = data.results; 
      console.log('componente ejecutado')  

    } catch(error) {
      console.log(error);
    }
  }
  
  onMounted(() => {
      fetchProducts();
  });


//Filter products
let input = ref("");

function filteredList() {
    console.log("searching for: ", input.value);
}


</script>

<template>
      <header class="flex h-12 bg-yellow-300 px-4">
        <form action="" class="flex m-auto max-w-screen-xl flex-1" @submit.prevent="filteredList">
            <input name="search" 
                    class="bg-white h-8 flex-1 mr-2 px-2" 
                    type="text"
                    placeholder="Search products"
                    v-model="input"
                    @input="filteredList"
                    >
            <button class="bg-gray-300 px-2 py-1 text-slate-700">
                Search
            </button>
        </form>
    </header>


    <!--   
      <PageHeader /> -->
    <div class="container mx-auto px-4 max-w-screen-xl">
        <ListProducts :products="products" />

    </div>  
<!--       <ProductDescription />
 -->
</template>

