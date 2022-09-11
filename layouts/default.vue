<template>
  <main>
    <navbar />
    <Nuxt />
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
}
</script>
