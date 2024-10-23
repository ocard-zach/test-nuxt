<script setup lang="ts">
const { setLocale } = useI18n();

const isOpen = ref(false);
console.log();
</script>

<template>
  <UContainer>
    <UModal :overlay="false" title="Modal without overlay">
      <UButton label="Open" color="primary" variant="subtle" @click="isOpen = true" />

      <template #body>
        <div class="p-4 space-x-2">
          <UButton @click="setLocale('en')">English</UButton>
          <UButton @click="setLocale('tw')">繁體中文</UButton>
          <p>{{ $t("welcome") }}</p>
        </div>
      </template>
    </UModal>
  </UContainer>
</template>
