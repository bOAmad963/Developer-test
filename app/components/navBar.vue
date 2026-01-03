<script setup>
  import { onClickOutside } from '#imports';
  import { useTemplateRef } from '#imports';

  const {openSideBar, closeSideBar, isSideBarOpen} = useSideBar()
  const sideBar = useTemplateRef('sideBar')
  onClickOutside(sideBar, closeSideBar)

</script>

<template>
  <Icon @click="openSideBar" name="prime:align-justify" size="40" class="cursor-pointer fixed top-4 right-4 z-100
  xl:hidden" />

  <nav ref="sideBar" id="sideBar" class=" border w-50 h-80 fixed top-0 right-0 transition-[400ms] translate-x-50 bg-amber-50 z-1000 
  xl:felx xl:mr-12 xl:bg-white xl:border-none xl:static xl:w-auto xl:h-auto xl:translate-x-0 xl:text-sm">
    <ul class="
    xl:flex xl:justify-end xl:mt-6">
      <li class="flex justify-center
      xl:block">
        <NuxtLink to="/" class="p-3 w-full flex justify-center hover:bg-amber-50
        xl:p-6 cursor-pointer xl:hover:bg-slate-200 xl:inline">
          Home
       </NuxtLink class="
       xl:p-6 xl:cursor-pointer xl:hover:bg-slate-200 xl:inline">
      </li>
      <li class="flex justify-center
      xl:block">
       <NuxtLink class="p-3 w-full flex justify-center hover:bg-amber-50
       xl:p-6 xl:cursor-pointer xl:hover:bg-slate-200 xl:inline">
          About Us
       </NuxtLink class="
       xl:p-6 xl:cursor-pointer xl:hover:bg-slate-200 xl:inline">
      </li>
      <li class="flex justify-center
      xl:block">
       <NuxtLink class="p-3 w-full flex justify-center hover:bg-amber-50
       xl:p-6 xl:cursor-pointer xl:hover:bg-slate-200 xl:inline">
          Media Center
       </NuxtLink class="
       xl:p-6 xl:cursor-pointer xl:hover:bg-slate-200 xl:inline">
      </li>
      <li class="flex justify-center
      xl:block">
       <NuxtLink class="p-3 w-full flex justify-center hover:bg-amber-50
       xl:p-6 xl:cursor-pointer xl:hover:bg-slate-200 xl:inline">
          Contact Us
       </NuxtLink class="
       xl:p-6 xl:cursor-pointer xl:hover:bg-slate-200 xl:inline">
      </li>
      <li class="flex justify-center
      xl:block">
        AR
      </li>
    </ul>
  </nav>
</template>