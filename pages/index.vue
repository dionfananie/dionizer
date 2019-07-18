<template>
  <div class="h-screen">
    <div class="wrapper--title flex h-screen items-center">
      <span>
        <p class="main--title text-gray-800">
          Dion
        </p>
        <p class="main--title text-gray-400">
          Fananie
        </p>
      </span>
    </div>
      <div class="wrapper--subtext absolute bottom-0 py-4">
        <p class="text-4xl subtext">Personal Project.</p>

      </div>
<!--      
      <div class="wrapper--button mt-10">
        <nuxt-link to="/works" class="btn--primary text-white font-bold py-4 px-16 rounded-full shadow-lg">
          Works
        </nuxt-link>
      </div> -->
  </div>
</template>

<script>
const Logo = () =>import('~/components/Logo.vue');

export default {
  components: {
    Logo
  }
}
</script>
<style lang="postcss" scoped>
  .main--title{
    font-size: 12rem;
    line-height: 12rem;
    /* text-shadow: 0.5rem 0.5rem 0.3rem #0000001f; */
  }
  .subtext{
      font-family: 'Lato', sans-serif;
  }
</style>

