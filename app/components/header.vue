<script setup>
</script>

<template>
    <div class="xl:flex xl:justify-between xl:items-end xl:ml-8 xl:mr-8 xl:mb-10">
      <div>
        <img src="/Icons/Black.png" alt="" class="w-25
        xl:w-25">
      </div>
      <div class="xl:flex xl:justify-between xl:items-center">
        <div class="xl:mr-15">
        <NuxtLink to="/electronics" class=" text-[14px] p-4 hover:bg-slate-200
        xl:p-6 xl:font-bold xl:text-sm">
          ELECTRONICS
        </NuxtLink>
        <NuxtLink to="/jewelry" class=" text-[14px] p-4 hover:bg-slate-200
        xl:p-6 xl:font-bold xl:text-sm">
          JEWLERY
        </NuxtLink>
        <NuxtLink to="/men-clothing" class=" text-[14px] p-4 hover:bg-slate-200
        xl:p-6 xl:font-bold xl:text-sm">
          MEN CLOTHING
        </NuxtLink>
        <NuxtLink to="/women-clothing" class=" text-[14px] p-4 hover:bg-slate-200
        xl:p-6 xl:font-bold xl:text-sm">
          WOMEN CLOTHING
        </NuxtLink>
      </div>
      <div class="ml-3
      flex items-center xl:ml-0">
        <div class="xl:flex relative">
          <input placeholder="Search..." type="text" class="bg-yellow-200 py-2 pl-2 xl:w-70">
          <img src="/Icons/Search.png" alt="" class="w-6 absolute top-2 right-2 cursor-pointer">  
        </div >
        <img src="/Icons/Login.png" alt="" class="w-6
        xl:w-6 m-4 cursor-pointer">
        <img src="/Icons/heart.png" alt="" class="w-6
        xl:w-6 m-4 cursor-pointer">
        <NuxtLink to="/cart">
          <img src="/Icons/Cart.png" alt="" class="w-6
          xl:w-6 m-4 cursor-pointer">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>