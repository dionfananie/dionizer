<template>
  <div class="wrapper--main">
    <div>
      <logo />
      <h1 class="title">
        Dionizer
      </h1>
      <h2 class="subtitle">
        Automated Deployment Nuxt App using Third Parties
      </h2>
      <div class="wrapper--button">
        <nuxt-link to="/works" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-16 rounded-full">
          Works
        </nuxt-link>
      </div>
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

<style lang="postcss" >

.wrapper--main {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
 
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
