<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
  <header>
    <div>
      <nav class="flex h-12 bg-zinc-300 px-4 text-black">
        <RouterLink to="/" class="p-2">Home</RouterLink>
        <RouterLink to="/about" class="p-2">Product View</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
