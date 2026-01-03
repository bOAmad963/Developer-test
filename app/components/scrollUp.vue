<script setup>
  const scrollUp = ref()
  onMounted(() => {
    window.onscroll = function () {
      try{
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
          scrollUp.value.style.display = 'block'
        }else{
          scrollUp.value.style.display = 'none'
        }
      }catch(error){
        console.log(error)
      }
    }
    scrollUp.value.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  })
  onUnmounted(() => {
    window.onscroll = () => {}
  })
</script>

<template>
  <button ref="scrollUp" class="fixed bottom-10 right-10 text-4xl z-101 hidden">⬆</button>
</template>