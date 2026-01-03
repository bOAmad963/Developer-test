<script setup>
  const props = defineProps({
    img:String,
    name:String,
    price:String,
    route:String,
    goTo:String,
    product:String
  })
  const {addToCart} = useCart()
  const addToCartBtn = ref()
  onMounted(() => {
    addToCartBtn.value.addEventListener('click', () => {
    addToCartBtn.value.textContent = '✔'
    addToCart(props.product)
    })
  })
</script>

<template>
  <div class="flex flex-col justify-between shadow-black shadow-sm bg-slate-300 rounded-sm h-full w-full">
    <NuxtLink :to="props.goTo">
      <img :src="props.img" alt="" class="object-cover w-full">
    </NuxtLink>
    <div class="p-4">
      <p>title:</p>
      <p>price:</p>
      <button ref="addToCartBtn" class="bg-blue-600 text-white py-2 w-[40%] mr-2 my-2 rounded-xl hover:bg-white hover:text-blue-600 font-bold">add to cart</button>
      <button class="bg-blue-600 text-white py-2 w-[40%] mr-2 my-2 rounded-xl hover:bg-white hover:text-blue-600 font-bold">by now</button>
    </div>
  </div>
</template>