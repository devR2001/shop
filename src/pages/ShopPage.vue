<template>
  <TheShopLayout>
    <template #default>
      <div class="row">
        <div class="col-3 m-3" v-for="i in 3" :key="i">
          <ProductListItem />
        </div>
      </div>
    </template>
  </TheShopLayout>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
import ProductListItem from "@/components/shop/ProductListItem.vue";
export default {
  name: "ShopPage",
  components: {
    TheShopLayout,
    ProductListItem,
  },
};
</script>

<style scoped></style>
