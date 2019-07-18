<template>
  <nav class="flex justify-between items-center p-5 absolute w-full">
    <span>
      <nuxt-link to="/" class="text-grey-500 text-xl hover:text-grey-800">
        <img src="/logo/logo.svg" class="nav--logo" alt="">
      </nuxt-link>
    </span>
    
    <span>
      <nuxt-link to="/works" class="text-grey-500 text-xl hover:text-grey-800 font-bold">Portofolio</nuxt-link>
    </span>
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
