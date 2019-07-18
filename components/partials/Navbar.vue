<template>
  <nav class="p-5 fixed z-10 w-full">
    <div class="container flex justify-between items-center mx-auto">
      <span>
        <nuxt-link to="/" class="text-grey-500 text-xl hover:text-grey-800">
          <img src="/logo/logo.svg" class="nav--logo" alt />
        </nuxt-link>
      </span>

      <span>
        <nuxt-link
          to="/works"
          class="text-grey-500 text-xl hover:text-grey-800 font-bold"
        >Portofolio</nuxt-link>
      </span>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.nav--logo {
  height: 60px;
  width: 80px;
}
</style>
