<template>
  <section>
    <section class="section">
      <div class="container">
        <div class="columns is-8 is-variable">
          <div class="column is-7-tablet">
            <tabs />
          </div>
          <div class="column is-5-tablet">
            <b-message
              title="Earn Points with the Coffee Club"
              v-model="isMessageActive"
              aria-close-label="Close message"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                optio ullam blanditiis dolorem maxime beatae libero, omnis quod
                atque officiis laborum cupiditate, ea inventore ducimus
                mollitia, labore accusantium minima deserunt.
              </p>
              <div class="has-text-centered mt-4">
                <b-button label="Signup" @click="cardModal" />
              </div>
            </b-message>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Tabs from './Tabs'
const ModalForm = {
  props: ['email', 'password'],
  template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="$emit('close')" />
                        <b-button
                            label="Login"
                            type="is-primary" />
                    </footer>
                </div>
            </form>
        `,
}

export default {
  name: 'ProductInfo',
  components: {
    Tabs,
  },
  data() {
    return {
      isShowModal: false,
      isMessageActive: true,
    }
  },
  methods: {
    showModal() {
      this.isShowModal = true
    },
    hideModal() {
      this.isShowModal = false
    },
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true,
      })
    },
  },
}
</script>

<style></style>
