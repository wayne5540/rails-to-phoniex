<template>
  <div class="hello">
    <div class="text-center mb-5">
      <h1>Welcome to Rails to Phoniex</h1>
      <h3 class="text-muted">Find exilir plugs by ruby gem's name</h3>
    </div>

    <div class="card mb-3" v-for="card in cards" v-bind:key="card.name">
      <div class="card-body">
        <h5 class="card-title">
          <a :href="card.url">{{ card.name }}</a>
        </h5>
        <p class="card-text text-muted" >{{ card.description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="plug in card.elixir_plugs" v-bind:key="plug.name">
          <span>{{ plug.name }}</span> - <a :href="plug.url">{{ plug.url }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    mapping: Object
  },
  computed: {
    cards: function () {
      return Object.values(this.mapping)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
