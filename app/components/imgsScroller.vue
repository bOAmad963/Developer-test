<script setup>
  import vueHorizontal from 'vue-horizontal'
  const imgs = ["/images/Header.jpg", "/images/Jewelry.jpg", "/images/Header.jpg", "/images/Jewelry.jpg"]
</script>

<template>
  <div class="relative">
    <img src="/Images/Header.jpg">
    <div class="absolute top-[30%] left-[4%]">
      <h1 class="text-2xl font-bold inline">SALE</h1>
      <br />
      <br />
      <span class="font-bold text-[10px]
      xl:text-sm">
        ACCESS A LIMITED SELECTION<br /> WITH UP TO 70% OFF
      </span>
      <br />
      <br />
      <NuxtLink  class="relative flex">
        <img src="/Icons/Bottun.png" alt="" class="w-[60%]">
        <span class="text-white font-bold absolute top-4.5 left-7 text-md">SHOP NOW</span>
      </NuxtLink>
    </div>
  </div>
</template>