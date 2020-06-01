<template>
  <div class="h-screen md:px-0 px-5 ">
    <div
      class="wrapper--title sm:flex-col lg:flex-row justify-between flex h-screen items-center"
    >
      <span>
        <vue-typed-js
          :strings="['@dionsastro', '@dionfananie']"
          loop="loop"
          :smart-backspace="true"
          :type-speed="150"
          :back-speed="190"
          :back-delay="300"
          :show-cursor="false"
        >
          <p class="main--name text-gray-700 typing" />
        </vue-typed-js>
        <p class="main--title">Swakarya Renjana</p>
      </span>
      <div class="wrapper--lottie">
        <Lottie :options="lottieAnimation" width="400px" />
      </div>
    </div>
    <div class="wrapper--lottie absolute bottom-0 w-full">
      <div @click="scrollPage">
        <Lottie :options="arrowAnimation" width="80px" class="wrapper--arrow" />
      </div>
    </div>
    <div class="h-screen flex justify-center items-center">
      <div class="wrapper--lottie w-full">
        <Lottie :options="discussAnimation" width="500px" />
      </div>
    </div>
  </div>
</template>

<script>
import animation from "~/static/lottie/office.json";
import arrow from "~/static/lottie/arrow.json";
import discuss from "~/static/lottie/discuss.json";
import Lottie from "~/components/Lottie";
export default {
  head: {
    title: "Dion Fananie",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Lato:400,700&display=swap&Roboto:400,700&display=swap"
      }
    ]
  },
  components: {
    Lottie
  },
  data: () => ({
    lottieAnimation: {
      animationData: animation
    },
    arrowAnimation: {
      animationData: arrow
    },
    discussAnimation: {
      animationData: discuss
    }
  })
};
</script>
<style lang="postcss" scoped>
.main--name {
  font-size: responsive 2rem 5rem;
  min-height: 100px;
}
.main--title {
  color: rgb(233, 82, 83);
  font-size: responsive 4rem 7rem;
  font-range: 425px 1920px;
  line-height: responsive 6rem 6rem;
  line-height-range: 425px 1920px;
}
.subtext {
  font-family: "Lato", sans-serif;
  font-size: responsive 1.5rem 2.25rem;
}
.wrapper--arrow {
  cursor: pointer;
}
</style>
