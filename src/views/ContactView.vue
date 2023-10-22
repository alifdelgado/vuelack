<script setup lang="ts"></script>

<template>
  <div class="w-1/2 shadow rounded px-6 py-4">
    <h2 class="mb-4 text-4xl tracking-tight font-bold text-center">Contact Us</h2>
    <p class="text-center mb-4">
      Got a technical issue? Want to send feedback about a beta feature? Need details about our
      Business plan? Let us know.
    </p>
    <form action="#" class="space-y-2">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
        <input
          type="email"
          id="email"
          class="shadow border text-sm rounded-lg block w-full p-3 focus:outline-none"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <label for="subject" class="block mb-2 text-sm font-medium">Subject</label>
        <input
          type="text"
          id="subject"
          class="block p-3 w-full text-sm rounded-lg border shadow focus:outline-none"
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block mb-2 text-sm font-medium">Your message</label>
        <textarea
          id="message"
          rows="6"
          class="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 focus:outline-none"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        class="py-3 px-4 font-medium text-center text-white rounded-lg bg-indigo-600 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"
      >
        Send message
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
