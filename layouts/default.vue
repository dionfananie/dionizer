<template>
  <span>
    <Navbar />
    <div class="container mx-auto relative">
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
