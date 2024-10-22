<script setup lang="ts">
const { setLocale } = useI18n();
</script>

<template>
  <UContainer>
    <!--  Lang -->
    <h2 class="font-bold mb-2">多語系範例</h2>
    <div class="grid sm:grid-cols-2 gap-4 mb-6 bg-gray-200">
      <div class="p-4 space-x-2">
        <UButton @click.prevent="setLocale('en')" :ui="{ base: 'mr-4 mb-4' }">English</UButton>
        <UButton @click.prevent="setLocale('tw')" :ui="{ base: 'mr-4 mb-4' }">繁體中文</UButton>
      </div>

      <div class="p-4 space-x-2 bg-gray-200">
        <p class="font-bold mt-4">語系切換內文：{{ $t("welcome") }}</p>
      </div>
    </div>

    <!--  Modal -->
    <h2 class="font-bold mb-2">彈窗範例</h2>
    <div class="p-4 mb-6 space-x-2 bg-gray-200">
      <UModal :close="false">
        <UButton label="自訂內容無捲軸 + 無關閉鈕彈窗" :ui="{ base: 'mr-4 mb-4' }" />
        <template #title>
          <div>Ocoin 折抵詳情</div>
        </template>
        <template #body>
          <div>Line One</div>
          <div>Line Two</div>
          <div>Line Three</div>
          <div>Line Four</div>
          <div>Line Five</div>
        </template>
        <template #footer>
          <UButton label="確定" class="w-full block" />
        </template>
      </UModal>

      <UModal title="Ocoin 折抵詳情" :ui="{ body: 'max-h-96 overflow-y-auto overflow-x-hidden' }">
        <UButton label="自訂內容有捲軸 + 關閉鈕彈窗" :ui="{ base: 'mr-4 mb-4' }" />
        <template #body>
          <div class="bg-gray-200">
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
          </div>
        </template>
        <template #footer>
          <UButton label="確定" class="w-full block" />
        </template>
      </UModal>

      <UModal title="Ocoin 折抵詳情" :ui="{ content: 'lg:m-0 overflow-y-auto overflow-x-hidden' }">
        <UButton label="適應裝置高度 + 彈窗內捲軸" :ui="{ base: 'mr-4 mb-4' }" />
        <template #body>
          <div class="bg-gray-200">
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
            <div>Line One</div>
            <div>Line Two</div>
            <div>Line Three</div>
            <div>Line Four</div>
            <div>Line Five</div>
          </div>
        </template>
      </UModal>
    </div>

    <!--  Content -->
    <div class="p-4 mb-6 space-x-2 bg-gray-200 h-[960px] text-center">
      <p class="font-bold mb-2">其他內容</p>
    </div>
  </UContainer>
</template>
