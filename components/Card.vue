<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto md:mb-24 mb-12 bg-gray-100">
    <img class="w-full" src="~/static/img/city.jpg" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="mb-2 flex justify-between items-center">
        <p class="font-bold text-xl">
          The Coldest Sunset
        </p>
        <div class="wrapper--lottie">
          <Lottie :options="lottieAnimation" width="40px" />
        </div>
      </div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
</template>

<script>
import Lottie from './Lottie'
import animation from '~/static/lottie/love.json'

export default {
  components: {
    Lottie
  },
  data: () => ({
    lottieAnimation: {
      animationData: animation
    }
  })
}
</script>

<style>

</style>
