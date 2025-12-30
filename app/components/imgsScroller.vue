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
      <span class="font-bold text-[10px] leading-1
      xl:text-sm xl:leading-1.5 mb-4">
        ACCESS A LIMITED SELECTION<br /> WITH UP TO 70% OFF
      </span>
      <br />
      <NuxtLink  class="relative flex">
        <img src="/Icons/Bottun.png" alt="" class="w-[60%]">
        <span class="text-white font-bold absolute top-[25%] left-[5%] text-[10px]
        xl:text-xl">SHOP NOW</span>
      </NuxtLink>
    </div>
  </div>
</template>