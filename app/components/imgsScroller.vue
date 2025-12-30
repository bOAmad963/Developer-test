<script setup>
  import vueHorizontal from 'vue-horizontal'
  const imgs = ["/images/Header.jpg", "/images/Jewelry.jpg", "/images/Header.jpg", "/images/Jewelry.jpg"]
</script>

<template>
  <div class="relative">
    <img src="/Images/Header.jpg">
    <div class="absolute top-[30%] left-[4%] w-[30%]">
      <h1 class="font-bold inline
      xl:text-2xl">SALE</h1>
      <br />
      <p class="leading-6">ACCESS A LIMITED</p>
      <p class="leading-6">SELECTION WITH</p>
      <p class="leading-6">UP TO 70% OFF</p>
      <NuxtLink  class="relative flex">
        <img src="/Icons/Bottun.png" alt="" class="w-[75%]">
        <span class="text-white font-bold absolute top-[15%] left-[10%] text-[8px]
        xl:text-xl">SHOP NOW</span>
      </NuxtLink>
    </div>
  </div>
</template>