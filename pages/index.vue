<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product.id">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import ProductComponent from "@/components/ProductComponent.vue";

const products = [
  {
    id: 1,
    title: "Title 1",
    description: "this is a description",
    url: "https://picsum.photos/id/7/800/800",
    price: 9999,
  },
  {
    id: 2,
    title: "Title 2",
    description: "this is a description",
    url: "https://picsum.photos/id/5/800/800",
    price: 2344,
  },
  {
    id: 3,
    title: "Title 3",
    description: "this is a description",
    url: "https://picsum.photos/id/4/800/800",
    price: 5433,
  },
  {
    id: 4,
    title: "Title 4",
    description: "this is a description",
    url: "https://picsum.photos/id/3/800/800",
    price: 9468,
  },
  {
    id: 5,
    title: "Title 5",
    description: "this is a description",
    url: "https://picsum.photos/id/1/800/800",
    price: 9999,
  },
  {
    id: 6,
    title: "Title 6",
    description: "this is a description",
    url: "https://picsum.photos/id/6/800/800",
    price: 2344,
  },
  {
    id: 7,
    title: "Title 7",
    description: "this is a description",
    url: "https://picsum.photos/id/14/800/800",
    price: 5433,
  },
  {
    id: 8,
    title: "Title 8",
    description: "this is a description",
    url: "https://picsum.photos/id/9/800/800",
    price: 9468,
  },
];
</script>

<style>
</style>