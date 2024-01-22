<template>
  <TheShopLayout>
    <template #default>
      <div class="row">
        <div class="col-12">
          <h1 class="mt-4">
            Neuer Artikel
            <button class="btn btn-lg bg-vue float-end"></button>
          </h1>
          <div class="card mt-4">
            <div class="row no-gutters">
              <div class="col-mg-4">
                <img
                  src="https://dummyimage.com/600x400/34495e/fff"
                  class="card-img"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <h5 class="card-title mb-4">Produkttitel</h5>
                    </div>
                    <div class="col-3">
                      <div class="d-grid">
                        <button class="btn bg-vue2">15 €</button>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat delectus sapiente tempora vel neque debitis facere
                      deleniti est pariatur ea. Ipsum temporibus et esse maxime
                      illum neque nam nobis nesciunt?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheShopLayout>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
export default {
  name: "CreateProductPage",
  components: {
    TheShopLayout,
  },
};
</script>

<style scoped></style>
