<script setup>
  const {cart, deleteFromCart, checkIsImpty} = useCart()
  const isImpty = checkIsImpty()
  let Icart = cart.value
  function handelDelete(product){
    deleteFromCart(product)
    Icart[product].amount = 0
  }
</script>

<template>
  <!--whene you refresh the page the cart is cleared cus there is no data storageing-->
  <!--you can use localStorage, coockis or link it to data-->
  <title>Cart</title>
  <div class="m-10">
    <div v-for="(product) in Icart" class="border">
      <div v-if="product?.amount > 0" class="flex">
        <div>
          <img :src="product?.img" alt="" class="w-70 h-80 object-cover">
          <div class="bg-slate-200 ">
            <div class="flex justify-between px-10 pt-3">
              <p>Amout: {{ product?.amount }}</p>
              <p>Total price: {{ product?.amount * product?.price }}$</p>
            </div>
            <div class="flex justify-between px-5">
              <button @click="() => handelDelete(product?.id)" class="hover:bg-red-600 hover:text-white transition-[400ms] p-2">cancel</button>
              <button>buy now</button>
            </div>
          </div>
        </div>
        <div class="flex-1 m-10 leading-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos libero cumque itaque culpa sequi aspernatur velit facere voluptate, tempore exercitationem praesentium illo dolorem maiores! Impedit sequi dolorum vero laborum quas.
        </div>
      </div>
    </div>
  </div>
</template>