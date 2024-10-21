<script setup lang="ts">
const { locale, setLocale } = useI18n();

const isOpen = ref(false);
</script>

<template>
  <div>
    <UButton label="Open" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4 space-x-2">
        <UButton @click="setLocale('en')">English</UButton>
        <UButton @click="setLocale('tw')">繁體中文</UButton>
        <p>{{ $t("welcome") }}</p>

        <Placeholder class="h-48" />
      </div>
    </UModal>
  </div>
</template>
