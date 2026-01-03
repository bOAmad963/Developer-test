<script setup>
  const props = defineProps({
    img:String
  })
</script>

<template>
  <div class="mb-8">
    <img :src="props.img" alt="">
  </div>
</template>