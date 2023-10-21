<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
</script>

<template>
  <main class="w-full h-screen bg-slate-100">
    <header>
      <NavbarComponent />
    </header>
    <section class="flex w-screen h-screen">
      <SidebarComponent />
      <div class="w-full h-full">
        <RouterView />
      </div>
    </section>
  </main>
</template>
