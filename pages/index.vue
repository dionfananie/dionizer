<template>
  <div class="h-screen md:px-0 px-5 ">
    <div class="wrapper--title flex h-screen items-center">
      <span>
        <p class="main--title text-gray-800">
          Dion
        </p>
        <p class="main--title text-gray-500">
          Fananie
        </p>
      </span>
    </div>
      <div class="wrapper--subtext absolute bottom-0 py-4">
        <p class="subtext">Personal Project.</p>
      </div>

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
    font-size: responsive 5rem 12rem;
    font-range: 425px 1920px;
    line-height: responsive 6rem 12rem;
    line-height-range: 425px 1920px;
  }
  .subtext{
      font-family: 'Lato', sans-serif;
      font-size: responsive 1.5rem 2.25rem
  }
</style>

