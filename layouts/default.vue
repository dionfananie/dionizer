<template>
  <div class="container mx-auto relative">
    <Navbar/>
    <nuxt/>
  </div>
</template>

<script>
const Navbar = () => import('~/components/partials/Navbar');
export default {
  components:{
    Navbar
  }
  
}
</script>
