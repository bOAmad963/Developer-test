<script setup>
  const route = useRoute()
  const {cart, addToCart} = useCart()
  const id = route.params.id
  const img = cart.value[id].img
  const props = defineProps({title:String})
</script>

<template>
  <header>
    <title>{{ props.title + '-' + id }}</title>
  </header>
    <div class="shadow-sm shadow-black m-1">
      <div class="flex justify-center gap-[10%]">
        <div class="w-[40%] max-w-60">
          <img :src="img" alt="" class="full">
          <p class="p-2 flex justify-center bg-slate-200">price</p>
        </div>
        <div class="flex items-center  justify-center w-[40%]">
          <button @click="() => addToCart(id)" class="text-green-700 border-green-700 border rounded-full hover:bg-green-700 hover:text-white transition font-bold p-4">add to cart</button>
        </div>
      </div>
      <div class="p-2 m-1 border">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptas vero nostrum, tenetur sapiente ipsa quae, porro asperiores quod consequuntur repudiandae repellat quis enim dolorem nemo iste impedit minus laboriosam. elit. Id magni quidem sit suscipit, ducimus veniam molestias optio consequuntur quisquam labore voluptatibus iure dolorem! Nesciunt itaque maxime fugit dolores qui exercitationem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quae atque, sed tempora, enim consequatur error repudiandae numquam, quo similique aliquid quos sequi nam voluptas aspernatur vel cum dolores ad.</p>
        <div class="flex justify-center">
        </div>
      </div>
    </div>
    <p class="absolute top-1 left-1 text-slate-400">-Add details about the product her</p>
</template>