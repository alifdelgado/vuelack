<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from '@/shared/components/NavbarComponent.vue'
import SidebarComponent from '@/shared/components/SidebarComponent.vue'
import { useUserStore } from '@/stores/userStore'

const { user } = useUserStore()

console.log(import.meta.env.VITE_APP_ID)
</script>

<template>
  <main class="w-full bg-slate-100">
    <header>
      <NavbarComponent :user="user" />
    </header>
    <section class="flex w-screen h-screen">
      <SidebarComponent v-if="user" />
      <div class="w-full h-full flex items-center justify-center">
        <RouterView />
      </div>
    </section>
  </main>
</template>
