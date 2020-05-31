<template>
  <nuxt-link to="/">
    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto md:mb-24 mb-12 bg-gray-100">
      <img class="w-full" :src="'http://localhost:1337/'+item.photos[0].url" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="mb-2 flex justify-between items-center">
          <p class="font-bold text-xl">
            {{ item.name }}
          </p>
        </div>
        <p class="text-gray-700 text-base">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ([])

    }
  }

}
</script>

<style>

</style>
