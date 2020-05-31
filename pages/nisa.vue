<template>
  <div class="md:px-0 home">
    <section class="h-screen flex justify-center items-center relative px-5">
      <div class="text-center">
        <h1 class="text-4xl">
          Selembar halaman untuk...
        </h1>
        <div class="my-10 sm:my-4 image">
          <img
            src="https://dionizer.s3-ap-southeast-1.amazonaws.com/nisa-pp.jpg"
            alt="nisa"
          />
        </div>
        <p class="text-2xl potrait">
          Nisa<br />
          6 Juni 2020
        </p>
        <p class="text-2xl landscape">
          Eristianisa Mulia Hasanah<br />
          6 Juni 2020
        </p>
      </div>
      <div class="absolute bottom-0 scroll py-0 sm:py-2">
        <img src="~/static/img/scroll.gif" />
      </div>
    </section>
    <section class="h-screen flex justify-center sm:py-2 py-10 px-5 relative">
      <div>
        <p class="text-4xl mail sm:mb-5 mt-6 mb-20">
          Welcome
          {{ date }}!
        </p>
        <p class="text-2xl mail">
          This page dedicated to
          <span> Eristianisa Mulia Hasanah, </span>
          new days, new You!
        </p>
        <p class="text-2xl mail">
          Be more mature, dream louder, create more, take the leap, inspired
          more, challenged more, Happy Quarterlife!
        </p>
        <p class="text-l mail mt-5">
          p.s. ssst... don't worry with quarterlife crysis. Just go beyond!
        </p>
        <div class="flex justify-between items-center mt-5">
          <div>
            <p class="text-l mail ">
              From: D.E.F
            </p>
          </div>
          <img
            src="https://dionizer.s3-ap-southeast-1.amazonaws.com/feather.png"
            width="80px"
          />
        </div>
      </div>
      <div class="absolute bottom-0 scroll py-0 sm:py-2">
        <img src="~/static/img/scroll.gif" alt="gif" />
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
              class="bg-red-500 hover:bg-red text-white font-bold py-2 w-full rounded-full "
              @click="isShow = true"
            >
              Open Me!
            </button>
          </div>
        </div>
        <Tickets v-show="isShow" />
      </div>
    </section>
  </div>
</template>

<script>
import Lottie from "~/components/Lottie";
import Tickets from "~/components/Tickets";
import animation from "~/static/lottie/gift.json";

export default {
  components: {
    Lottie,
    Tickets
  },
  layout: "bday",
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Courgette&family=Satisfy&display=swap"
      }
    ]
  },
  data: () => ({
    date: "25th",
    int: 0,
    lottieAnimation: {
      animationData: animation
    },
    isShow: false
  }),
  computed: {},
  mounted() {
    const nowday = new Date("06/6/2020");
    const bornday = new Date("06/6/1995");
    const timeArr = [
      (nowday.getTime() - bornday.getTime()) / (1000 * 3600 * 24) + "days",
      nowday.getMonth() -
        bornday.getMonth() +
        12 * (nowday.getFullYear() - bornday.getFullYear()) +
        "months",
      nowday.getFullYear() - bornday.getFullYear() + "th"
    ];
    setInterval(() => {
      this.date = timeArr[this.int];
      this.int += 1;
      if (this.int === timeArr.length) {
        this.int = 0;
      }
    }, 1000);
  }
};
</script>

<style lang="postcss" scoped>
.home {
  font-family: "Satisfy", cursive;
}
.mail {
  font-family: "Courgette", cursive;
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
.scroll {
  img {
    height: 80px;
    @media screen and (orientation: landscape) {
      height: 50px;
    }
  }
}
</style>
