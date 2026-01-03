<script setup>
  const hoverStyle = 'hover:bg-slate-800'
</script>

<template>
  <div class="bg-black pb-2">
    <div class="flex justify-between items-center mx-8 flex-col
    md:mx-2 md:flex-row">
    <div>
      <img src="/Icons/white.png" alt="" class="object-cover w-50 h-38
      md:h-50 md:w-70">
      <div class="flex justify-center gap-4">
        <a href="https://www.facebook.com">
          <img src="/Icons/facebook.png" alt="" class="cursor-pointer w-8 md:w-10">
        </a>
        <a href="https://www.youtube.com">
          <img src="/Icons/youtube.png" alt="" class="cursor-pointer w-8 md:w-10">
        </a>
        <a href="https://www.instagram.com">
          <img src="/Icons/instagram.png" alt="" class="cursor-pointer w-8 md:w-10">
        </a>
        <a href="https://www.twitter.com">
          <img src="/Icons/twitter.png" alt="" class="cursor-pointer w-8 md:w-10">
        </a>
      </div>
    </div>
    <hr class="text-white md:hidden w-full my-4" />
    <div class="flex justify-between gap-[12%] w-full mx-[7%]">
      <div class="flex flex-col text-white gap-6">
        <NuxtLink to="/" :class="hoverStyle">
          Home
        </NuxtLink>
        <NuxtLink :class="hoverStyle">
          About us
        </NuxtLink>
        <NuxtLink :class="hoverStyle">
          Media Center
        </NuxtLink>
        <NuxtLink :class="hoverStyle">
          Contact US
        </NuxtLink>
      </div>
      <div  class="flex flex-col text-white gap-6">
        <NuxtLink to="/electronics" :class="hoverStyle">
          Elcetronics
        </NuxtLink>
        <NuxtLink to="/jewelry" :class="hoverStyle">
          Jewelry
        </NuxtLink>
        <NuxtLink to="/men-clothing" :class="hoverStyle">
          Men Clothing
        </NuxtLink>
        <NuxtLink to="/women-clothing" :class="hoverStyle">
          Women Clothing
        </NuxtLink>
      </div>
      <div class="flex flex-col text-white gap-6">
        <h1>Contact Us</h1>
        <NuxtLink :class="hoverStyle">
          +971 00 000 0000
        </NuxtLink>
        <NuxtLink :class="hoverStyle">
          +971 0 000 0000
        </NuxtLink>
        <NuxtLink :class="hoverStyle">
          info@sample.com
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <hr class="text-white my-2 w-[98%]"/>
  </div>
  <p class="flex justify-center text-white">Developer Test 2024. All Righs Reseved.</p>
  </div>
</template>