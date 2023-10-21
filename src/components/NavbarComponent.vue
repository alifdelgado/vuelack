<script setup lang="ts"></script>

<template>
  <nav class="text-white shadow bg-slate-900 shadow-slate-800">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
      <a href="/" class="flex items-center">
        <img src="@/assets/logo.svg" class="h-8 mr-3" alt="Vuelack" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Vuelack</span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex p-2 space-x-4">
          <li>
            <a href="#" class="hover:underline" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="hover:underline">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Services</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Pricing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
