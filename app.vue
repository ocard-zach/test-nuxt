<script setup lang="ts"></script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --color-yellow-500: #FFEA00;
}

@layer base {

  h1,
  h2,
  h3,
  h4 {
    font-size: 1.125rem;
  }
}
</style>
