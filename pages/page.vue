<script setup lang="ts">
const a = 1;
const b = "2";
const d = {
  a: 1,
  b: 2
};
const test = () => {};

onMounted(() => {
  test();
  [].map((element) => element);
});

const c = computed(() => {
  return 123;
});
</script>

<template>
  <div>
    <span></span>
  </div>
</template>
