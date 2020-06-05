<template>
  <div class="md:px-0 home">
    <section class="h-screen relative">
      <div
        class="flex justify-center items-center h-full sm:py-2 py-10 px-5 container mx-auto "
      >
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl">
            The New Page specially for...
          </h1>
          <div class="my-10 sm:my-4 image">
            <img
              src="https://dionizer.s3-ap-southeast-1.amazonaws.com/nisa-pp.jpg"
              alt="nisa"
            />
          </div>
          <transition name="fade" mode="out-in">
            <p v-if="!landscapeSize" key="1" class="text-2xl">
              Nisa
            </p>
            <p v-if="landscapeSize" key="2" class="text-2xl">
              Eristianisa Mulia Hasanah
            </p>
          </transition>
          <p class="text-2xl ">
            6 Juni 2020
          </p>
        </div>
      </div>
      <div class="absolute top-0 px-4 right-0 h-full hidden sm:block">
        <div class="flex items-center h-full">
          <Lottie :options="scrollAnimation" height="300px" />
        </div>
      </div>
      <div class="absolute bottom-0 px-4 w-full block sm:hidden">
        <div class="flex items-center w-full">
          <Lottie :options="scrollMobileAnimation" width="60px" />
        </div>
      </div>
    </section>
    <section :class="landscapeSize ? 'relative' : 'relative h-screen'">
      <div class="sm:py-2 py-10 px-5 container mx-auto">
        <img src="~/static/bday/divider.svg" width="50%" class="mx-auto" />
        <p class="text-2xl sm:text-4xl sm:mb-5 mt-6 mb-2 sm:mt-8">
          Happy Birthday
          <TimeCounter />
        </p>
        <p class="text-xl ">
          This page dedicated to
          <span> Eristianisa Mulia Hasanah. </span>
          New days, New You!
        </p>
        <p v-if="landscapeSize" class="text-xl ">
          <span class="landscape">
            Never hesitate from all uncertainty, at the end of the day, you've
            been through it better. Dealing what people said, let it go, you
            know what you have to do. Keep trying new things, discover every
            posibilities.
          </span>
          <span class="landscape">
            Run faster, Dream louder, create more, take the leap, inspired more,
            challenged more.
          </span>
        </p>
        <p class="text-xl  mt-5">
          Happy Quarterlife!
        </p>
        <div v-if="landscapeSize">
          <vue-typed-js
            :strings="[
              'p.s. pssst... dont worry with quarterlife crysis. Just go beyond it!',
              'p.s. pssst... '
            ]"
            :loop="true"
            :loop-count="5"
            :smart-backspace="true"
            :type-speed="50"
            :show-cursor="false"
          >
            <p class="text-l  mt-5 gold typing" />
          </vue-typed-js>
        </div>
        <div
          class=" mt-5"
          :class="
            !landscapeSize ? 'absolute bottom-0 left-0 px-5 w-full' : 'relative'
          "
        >
          <div class="flex justify-between items-center">
            <p class="text-l  ">
              From: D.E.F
            </p>
            <img
              src="https://dionizer.s3-ap-southeast-1.amazonaws.com/feather.png"
              width="80px"
            />
          </div>
        </div>
      </div>
      <div class="absolute top-0 px-4 right-0 h-full hidden sm:block">
        <div class="flex items-center h-full">
          <Lottie :options="scrollAnimation" height="300px" />
        </div>
      </div>
      <div class="absolute bottom-0 px-4 w-full block sm:hidden">
        <div class="flex items-center w-full">
          <Lottie :options="scrollMobileAnimation" width="60px" />
        </div>
      </div>
    </section>
    <section class="h-screen flex justify-center items-center px-5">
      <div>
        <div v-show="!isShow">
          <p class="text-2xl text-center">
            Here you go, open it!
          </p>
          <Lottie :options="lottieAnimation" width="250px" />
          <div class="flex justify-center">
            <button
              class="text-white font-bold py-2 w-full rounded-full bg-gold"
              @click="isShow = true"
            >
              Open Me!
            </button>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <div v-if="isShow">
            <p class="text-2xl text-center mb-5">
              See you there..
            </p>
            <Tickets />
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import Lottie from "~/components/Lottie";
import Tickets from "~/components/Tickets";
import TimeCounter from "~/components/TimeCounter";
import animation from "~/static/lottie/gift.json";
import scroll from "~/static/lottie/scroll3.json";
import scrollMobile from "~/static/lottie/scroll1.json";

export default {
  components: {
    Lottie,
    Tickets,
    TimeCounter
  },
  layout: "bday",
  head: {
    title: "Happy Birthday Nisa"
  },
  data: () => ({
    lottieAnimation: {
      animationData: animation
    },
    scrollAnimation: {
      animationData: scroll
    },
    scrollMobileAnimation: {
      animationData: scrollMobile
    },
    orientation: "",
    isShow: false
  }),
  computed: {
    landscapeSize() {
      const result = this.orientation === "landscape";
      return result;
    }
  },
  mounted() {
    this.orientation = screen.orientation.type.match(/\w+/)[0];
    window.addEventListener("orientationchange", this.handleOrientationChange);
  },
  destroyed() {
    window.removeEventListener(
      "orientationchange",
      this.handleOrientationChange
    );
  },
  methods: {
    handleOrientationChange() {
      this.orientation = screen.orientation.type.match(/\w+/)[0];
    }
  }
};
</script>

<style lang="postcss" scoped>
section {
  scroll-snap-type: y mandatory;
  scroll-snap-align: center;
}
.home {
  font-family: "Courgette", cursive;
}
.gold {
  color: #d89972;
}
.bg-gold {
  background-color: #ecbb9c;
}

.landscape {
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s linear;
  display: inline;
}
.potrait {
  visibility: visible;
}
@media screen and (orientation: landscape) {
  .landscape {
    visibility: visible;
    display: inline-block;
    opacity: 1;
    transition: all 0.4s linear;
  }
  .potrait {
    visibility: hidden;
    height: 0;
  }
}

.image img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin: auto;
  border-radius: 100%;
  border-radius: 100%;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.25);
  @media screen and (orientation: landscape) {
    width: 120px;
    height: 120px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
