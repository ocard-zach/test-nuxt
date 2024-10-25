<script setup lang="ts">
const list = ref([
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 },
  { title: '目前持有', amount: 649 },
  { title: '抵用手續', amount: 649 },
  { title: '此次抵用小計', amount: 649 },
  { title: '抵用金額', amount: 649 },
  { title: '預計剩餘', amount: 649 }
]);
</script>

<template>
  <UModal
    title="Ocoin 折抵詳情"
    :ui="{
      content: 'max-w-[382px]! lg:m-0 overflow-y-auto overflow-x-hidden',
      header: 'sticky top-0 bg-white border-none px-6 pt-6 pb-2',
      body: 'border-none py-2!',
      footer: 'sticky bottom-0 bg-white px-6 pt-2 pb-6'
    }"
  >
    <UButton label="付款賺取回饋" :ui="{ base: 'mr-4 mb-4' }" />
    <template #body>
      <div class="">
        <div class="flex gap-1 mb-4">
          <span class="text-xs text-[#8E8E8E] font-medium"> 每 499 </span>
          <span class="text-xs text-[#8E8E8E] font-medium">
            可折抵 NT$ 499
          </span>
        </div>
        <ul class="flex flex-col gap-1 text-[#333333]">
          <li v-for="(item, index) in list" :key="index" class="flex justify-between">
            <span class="text-sm font-medium">{{ item.title }}</span>
            <span>{{ item.amount }}</span>
          </li>
        </ul>
      </div>
    </template>
    <template #footer>
      <UButton label="確定" block />
    </template>
  </UModal>
</template>
