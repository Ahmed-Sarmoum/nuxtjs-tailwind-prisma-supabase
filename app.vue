<template>
  <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]" />
  <NuxtPage />

  <MenuOverlay
    :class="[
      {
        'max-h-[100vh] transition-all duration-200 ease-in visible':
          store.isMenuOverlay,
      },
      {
        'max-h-0 transition-all duration-200 ease-out invisible':
          !store.isMenuOverlay,
      },
    ]"
  />
</template>

<script setup>
import { userStore } from "./stores/user";

const store = userStore();
const route = useRoute();

let windowWidth = ref(process.client ? window.innerWidth : "");

onMounted(() => {
  // store.isLoading = true
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
});

watch(
  () => windowWidth.value,
  () => {
    if (windowWidth.value >= 767) {
      store.isMenuOverlay = false;
    }
  }
);

watch(
  () => route.fullPath,
  () => {
    // store.isLoading = true;
  }
);
</script>