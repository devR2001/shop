<template>
  <TheShopLayout>
    <template #default>
      <h2>Hallo</h2>
    </template>
  </TheShopLayout>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
export default {
  name: "ShopPage",
  components: {
    TheShopLayout,
  },
};
</script>

<style scoped></style>
