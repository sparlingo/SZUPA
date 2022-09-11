<template>
  <b-tabs v-model="activeTab">
    <b-tab-item label="Product Information">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
      repellat facere quaerat tempora magni dolorum possimus ad, natus deserunt
      facilis nulla culpa doloribus minima beatae quibusdam veniam? Provident,
      eos ab?
    </b-tab-item>
    <b-tab-item label="Delivery Information">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        repellat facere quaerat tempora magni dolorum possimus ad, natus
        deserunt facilis nulla culpa doloribus minima beatae quibusdam veniam?
        Provident, eos ab?
      </p>
    </b-tab-item>
  </b-tabs>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      activeTab: 0,
    }
  },
  methods: {},
}
</script>

<style></style>
