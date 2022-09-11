<template>
  <div>
    <breadcrumbs />
    <product-hero />
    <product-info />
    <card-section />
    <footer-component />
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import ProductInfo from '../components/ProductInfo.vue'
import ProductHero from '../components/ProductHero.vue'
import CardSection from '../components/CardSection.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  name: 'IndexPage',
  components: {
    Breadcrumbs,
    ProductInfo,
    ProductHero,
    CardSection,
    FooterComponent,
  },
}
</script>
