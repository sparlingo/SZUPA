<template>
  <section class="section is-hidden-mobile">
    <div class="container">
      <h3 class="title has-text-centered is-size-4">Realted Products</h3>
      <div class="columns mt-5 is-8 is-variable is-centered">
        <div
          v-for="product in products"
          :key="product.id"
          class="column is-4-tablet is-3-desktop"
        >
          <div class="card">
            <div class="card-image has-text-centered px-6">
              <img :src="product.img" alt="product" />
            </div>
            <div class="card-content">
              <p>{{ product.price }}</p>
              <p class="title is-size-5">{{ product.title }}</p>
            </div>
            <div class="card-footer">
              <p class="card-footer-item">
                <a class="has-text-grey">View</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardSection',
  data() {
    return {
      products: [
        {
          id: 1,
          img: require('../assets/imgs/p1.png'),
          title: 'Cortrado Cup',
          price: '$10',
        },
        {
          id: 2,
          img: require('../assets/imgs/p2.png'),
          title: 'Docker Light',
          price: '$12',
        },
        {
          id: 3,
          img: require('../assets/imgs/p3.png'),
          title: 'Coffee Cup',
          price: '$14',
        },
      ],
    }
  },
}
</script>

<style></style>
