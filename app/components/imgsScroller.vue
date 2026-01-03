<script setup>
  import vueHorizontal from 'vue-horizontal'
  
  const props = defineProps({
    imgs:Array,
  })
</script>

<template>
  <div class="mb-8 mt-2">
    <vue-horizontal class="w-[98%]">
      <div v-for="img in props.imgs" class="w-screen">
        <img :src="img" alt="">
      </div>
    </vue-horizontal>
  </div>
</template>