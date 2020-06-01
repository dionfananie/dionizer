<template>
  <span>
    <Navbar />
    <div class="container mx-auto relative content pt-20">
      <nuxt />
    </div>
  </span>
</template>

<script>
const Navbar = () => import("~/components/partials/Navbar");
export default {
  components: {
    Navbar
  }
};
</script>
