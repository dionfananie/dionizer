<template>
  <div class="md:px-0 px-5 py-5">
    <section class="flex flex-wrap mb-4">
      <div
        v-for="(band, idx) in bands"
        :key="idx"
        class="lg:w-1/3 md:w-1/2 mx-6 lg:mx-0"
      >
        <Band :item="band" />
      </div>
    </section>
  </div>
</template>

<script>
import bandsQuery from "~/apollo/queries/band";
import Band from "~/components/Band";
export default {
  components: {
    Band
  },
  data: () => ({
    bands: []
  }),
  apollo: {
    bands: {
      prefetch: true,
      query: bandsQuery
    }
  }
};
</script>
