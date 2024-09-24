<script setup lang="ts">

import { onMounted, ref } from 'vue';
import axiosClient from '../utils/axios';


//My interface
interface Product {
  id: number;
  title: string;
  condition: string;
  thumbnail: string;
  price: string;
}

const products = ref<Product[]>([]);


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
</script>


<template>
      <div>
        <ul class="flex flex-wrap justify-center">
          <li  class="w-64 max-w-sm rounded overflow-hidden shadow-lg m-4" 
              v-for="product in products" :key="product.id">

            <div class="px-6 py-4">
              <p class="m-1">{{ product.condition }}</p>
              <h3 class="font-bold text-xl mb-2">{{ product.title }}</h3>
              <p class="font-bold">{{ product.price }}</p>
            </div>
            <img :src="product.thumbnail" class="m-auto" alt="">      
          </li>
        </ul>
      </div>

</template>