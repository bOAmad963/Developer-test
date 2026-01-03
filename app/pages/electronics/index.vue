<script setup>
  const {cart} = useCart()
  let imgs =[]
  let routes = []
  for (let a in cart.value){
    if(cart.value[a].catagory == 'electronics'){
      imgs.push(cart.value[a].img)
      routes.push(cart.value[a].id)
    }
  }
</script>

<template>
  <title>Electronics</title>
  <div class="flex justify-center mx-10 mb-10">
    <div class="grid grid-cols-3 gap-[5%]">
      <div v-for="(img, index) in imgs">
        <card :img="img" :goTo="`/electronics/${routes[index]}`" :product="routes[index]" />
      </div>
    </div>
  </div>
</template>
