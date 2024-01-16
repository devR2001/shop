<template>
  <TheTwoColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4'"
    :fullsize="true"
  >
    <template #leftCol>
      <div class="mt-5 text-center">
        <div class="display-1 my-5">Der Shop</div>
        <div class="display-4 my-5">
          Erhalten Sie Zugriff auf Exklusive Aritkel
        </div>
        <div class="my-5 offset-4 col-4">
          <img src="@/assets/shopping.svg" class="img-fluid" />
        </div>
      </div>
    </template>
    <template #rightCol>
      <component
        :is="componentName"
        @change-component="changeComponent"
      ></component>
    </template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "@/layouts/TheTwoColumnsLayout.vue";
import RegisterVue from "@/components/auth/RegisterVue.vue";
import LoginVue from "@/components/auth/LoginVue.vue";

export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    RegisterVue,
    LoginVue,
  },
  data() {
    return {
      componentName: "register",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
};
</script>

<style scoped></style>
