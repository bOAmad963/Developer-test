<script setup>
  import vueHorizontal from 'vue-horizontal'
  
  const props = defineProps({
    cards:Object,
  })
</script>

<template>
  <div class="mb-10">
    <vue-horizontal class="w-[98%]">
      <div v-for="(card, index) in props.cards?.imgs" :class="props.cards.style">
        <NuxtLink :to="`/${props.cards.route[index]}/${props.cards.id[index]}`">
          <img :src="props.cards.imgs[index]" alt="">
          <p class="flex justify-center text-gray-700">{{ props.cards.name[0] }}</p>
          <div class="font-bold text-[13px]">
          <center>
            <span class="block
            xl:inline">AED</span>
            <span class="mx-2">899.00</span>
            <span>800.00</span>
          </center>
        </div>
        </NuxtLink>
      </div>
    </vue-horizontal>
  </div>
</template>