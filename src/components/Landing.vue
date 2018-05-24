<template>
  <div class="col-sm-12 col-lg-8">
    <div class="text-center mb-5">
      <h1>Welcome to Rails to Phoniex</h1>
      <h3 class="text-muted">Find exilir libraries by ruby gem's name</h3>
    </div>

    <div class="mb-5">
      <div class="input-group input-group-lg">
        <input class="form-control" placeholder="Keyword searching..." v-model="searchKey" autofocus>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary input-group-text" type="button">Search</button>
        </div>
      </div>
    </div>

    <div class="card mb-3" v-for="card in cards()" v-bind:key="card.name">
      <div class="card-body">
        <h5 class="card-title">
          <a :href="card.url">{{ card.name }}</a>
        </h5>
        <p class="card-text text-muted" >{{ card.description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="plugin in card.elixir_plugins" v-bind:key="plugin.name">
          <span>{{ plugin.name }}</span> - <a :href="plugin.url">{{ plugin.url }}</a>
        </li>
      </ul>
    </div>

    <div v-show="cards().length == 0">
      <h3>Oops, can't find any gem by given keyword: {{ searchKey }}</h3>
      <p>You can help us to <a href="https://github.com/wayne5540/rails-to-phoniex">add the missing piece</a> and becomes a contrubitor (Thank you~ 🙏) or try other keyword.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    mapping: Object
  },
  data: function () {
    return {
      searchKey: ""
    }
  },
  methods: {
    cards: function () {
      if (this.searchKey == "") {
        return this.mapping.gems
      } else {
        return this.mapping.gems.filter((gem) => (
          gem.alias_names.find((name) => (
            name.toLowerCase().includes(this.searchKey.toLowerCase())
          ))
        ))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
