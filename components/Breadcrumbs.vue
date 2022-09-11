<template>
  <section class="section pt-4 pb-0">
    <div class="container">
      <b-breadcrumb class="is-size-6" separator="has-arrow-separator">
        <b-breadcrumb-item tag="router-link" to="/"
          >Coffee Ninja</b-breadcrumb-item
        >
        <b-breadcrumb-item tag="router-link" to="/documentation"
          >Shop</b-breadcrumb-item
        >
        <b-breadcrumb-item
          tag="router-link"
          to="/documentation/breadcrumb"
          active
          >Docker Dark Roast</b-breadcrumb-item
        >
      </b-breadcrumb>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumbs',
}
</script>

<style></style>
