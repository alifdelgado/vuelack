<script setup lang="ts">
import useAuth from '@/auth/composables/useAuth'

const { githubLogin, googleLogin } = useAuth()

const loginWithGithub = () => {
  githubLogin()
}

const loginWithGoogle = () => {
  googleLogin()
}
</script>

<template>
  <div class="space-y-2">
    <button
      type="button"
      class="w-full border rounded shadow py-2 hover:bg-slate-200"
      @click="loginWithGithub"
    >
      <v-icon name="bi-github" />
      Login with Github
    </button>
    <button
      type="button"
      class="w-full border rounded shadow py-2 bg-red-600 text-white hover:bg-red-700"
      @click="loginWithGoogle"
    >
      <v-icon name="bi-google" />
      Login with Google
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
