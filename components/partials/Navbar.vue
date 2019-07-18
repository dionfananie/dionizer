<template>
  <nav class="flex justify-between items-center py-5 absolute w-full">
    <div class="mr-6">
      <nuxt-link to="/" class="text-grey-500 text-xl hover:text-grey-800">
        <img src="/logo/logo.svg" class="nav--logo" alt="">
      </nuxt-link>
    </div>
    
    <div class="mr-6">
      <nuxt-link to="/works" class="text-grey-500 text-xl hover:text-grey-800">Portofolio</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
    .nav--logo{
        height: 60px;
        width: 80px;
    }
  
</style>
