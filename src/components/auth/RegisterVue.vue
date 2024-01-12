<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" class="img-fluid" />
    </div>
    <div class="text-center">
      <h2>Jetzt registrieren</h2>
      <p>
        oder
        <a class="text-vue2" role="button"
          >Melden Sie sich mit Ihrem Konto an</a
        >
        <!-- role="button" bedeutet, dass sich der Cursor ändert! -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterVue",
};
</script>

<style scoped></style>
