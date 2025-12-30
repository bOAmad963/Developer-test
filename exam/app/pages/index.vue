<script setup>

  const {isSideBarOpen} = useSideBar()
</script>

<template>
  <div :class="{'blur-sm':isSideBarOpen}">
    <ImgsScroller />
  </div>
</template>