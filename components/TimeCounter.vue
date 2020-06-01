<template>
  <span>
    <transition name="fade" mode="out-in">
      <span v-if="int === 0" :key="int" class="gold">{{ timeArr[0] }}!</span>
      <span v-if="int === 1" :key="int" class="gold">{{ timeArr[1] }}!</span>
      <span v-if="int === 2" :key="int" class="gold">{{ timeArr[2] }}!</span>
    </transition>
  </span>
</template>

<script>
export default {
  data: () => ({
    date: "",
    int: 0,
    count: 0,
    timeArr: []
  }),
  mounted() {
    const nowday = new Date("06/6/2020");
    const bornday = new Date("06/6/1995");
    this.timeArr = [
      (nowday.getTime() - bornday.getTime()) / (1000 * 3600 * 24) + "days",
      nowday.getMonth() -
        bornday.getMonth() +
        12 * (nowday.getFullYear() - bornday.getFullYear()) +
        "months",
      nowday.getFullYear() - bornday.getFullYear() + "th"
    ];
    setInterval(() => {
      this.date = this.timeArr[this.int];
      this.int += 1;
      this.count += 1;
      if (this.int === this.timeArr.length) {
        this.int = 0;
      }
    }, 4000);
  }
};
</script>

<style lang="postcss">
.gold {
  color: #ecbb9c;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
