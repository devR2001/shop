<template>
  <div>
    <!-- Navbar -->
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <slot><h1>Hauptbereich</h1></slot>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "TheShopLayout",
};
</script>

<style></style>
