<script setup>
  import img1 from '/Images/img1.jpg'
  import jewelry from '/Images/Jewelry.jpg'
  const {isSideBarOpen} = useSideBar()
  const scroller1 = {
    imgs: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg', '/Images/4.jpg', '/Images/F.png'],
    style: `w-32 m-2 shadow-black shadow-sm
    xl:w-70 xl:m-4 `,
    name: ['dsad','dsad','dsad','dsad','dsad',],
    route: ['women-clothing', 'electronics', 'jewelry', 'electronics', 'men-clothing'],
    id:['a', 'b', 'c', 'd', 'f']
  }
  const scroller2 = {
    imgs: ['/Images/D.png','/Images/F.png','/Images/G.png','/Images/H.png'],
    style: `w-32 m-2
    xl:w-[20%]`,
    name: ['sdasd','sdasd','sdasd','sdasd',],
    route: ['women-clothing', 'men-clothing', 'men-clothing', 'men-clothing'],
    id:['e', 'f', 'g', 'h']
  }
  const headersImgs = ["/images/Header.jpg", "/images/Jewelry.jpg", "/images/Header.jpg", "/images/Jewelry.jpg"]

</script>

<template>
  <header>
    <title>Developer test</title>
  </header>
  <div :class="{'blur-sm':isSideBarOpen}">
    <ScrollUp />
    <ImgsScroller :imgs="headersImgs" />
    <ImgPlaceholder :img="jewelry" />
    <h1 class="xl:font-bold xl:text-2xl xl:ml-4">SPECIAL OFFERS</h1>
    <CardScroller :cards="scroller1" />
    <ImgPlaceholder :img="img1" />
    <h1 class="xl:font-bold xl:text-2xl xl:ml-4 mt-8">NEW ARRIVALS</h1>
    <CardScroller :cards="scroller2" />
    <BecomeMember />
  </div>
</template>