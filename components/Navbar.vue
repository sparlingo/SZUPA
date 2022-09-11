<template>
  <nav class="navbar has-shadow is-white">
    <div class="navbar-brand">
      <a href="#" class="navbar-item">
        <img
          src="~/assets/imgs/logo.png"
          alt="brand"
          style="max-height: 70px"
          class="px-2 py-2"
        />
      </a>
      <a class="navbar-burger" @click="showNav()">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div id="nav-links" class="navbar-menu" :class="active ? 'is-active' : ''">
      <div class="navbar-end">
        <a class="navbar-item">My Account</a>
        <a class="navbar-item">Shopping Cart (0)</a>
        <!-- <a class="navbar-item">{{ name }}</a> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      active: false,
    }
  },
  methods: {
    showNav() {
      this.active = !this.active
    },
  },
}
</script>

<style></style>
