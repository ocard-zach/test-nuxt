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
  --color-yellow-500: #ffea00;
}
</style>
