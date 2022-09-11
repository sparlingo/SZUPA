<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered is-multiline">
        <div class="column is-6-tablet is-3-desktop">
          <h1 class="is-size-3-mobile is-size-1-desktop title">Docker</h1>
          <h2 class="is-size-3-mobile is-size-2 subtitle">Dark Roast</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus rerum iure quis minima molestias, illo esse amet! Id,
            voluptates libero?
          </p>
        </div>
        <div class="column is-6-tablet is-5-desktop has-text-centered">
          <img
            src="../assets/imgs/product.png"
            class="px-6"
            alt="docker coffee"
          />
        </div>
        <div class="column is-12-tablet is-4-desktop">
          <div class="is-size-4 mb-4">$10.95</div>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            eveniet.
          </p>
          <form>
            <div class="field">
              <div class="control mb-6">
                <div class="select is-dark">
                  <select>
                    <option>Small (250g)</option>
                    <option>Large (500g)</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <button class="button is-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProuctHero',
}
</script>

<style></style>
