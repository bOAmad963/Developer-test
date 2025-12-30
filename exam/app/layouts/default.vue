<script setup>
  const {isSideBarOpen} = useSideBar()
</script>

<template>
  <NavBar /> 
  <Header :class="{'blur-[3px]': isSideBarOpen}" />
  <slot />
</template>