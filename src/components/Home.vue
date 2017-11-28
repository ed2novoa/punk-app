<template>
  <div class="container home-main-container">
    <div class="row">
      <div class="col-12 form-inline justify-content-center search-cotainer">
        <label for="search-box">Search your favorite beer by name:&nbsp;&nbsp;&nbsp;</label>
        <input class="form-control" type="text" id="search-box" v-model="searchTerm" placeholder="Beer name...">
        <button type="button" class="btn btn-primary">Search</button>
      </div>
    </div>
    <div class="row">
      <BeerCard v-for="beer in getCurrentBeers" :beer="beer" :key="beer.id"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import BeerCard from './BeerCard';

export default {
  name: 'Home',
  data () {
    return {
      searchTerm: ''
    }
  },
  components : {BeerCard},
  created() {
    this.$store.dispatch('setCurrentBeers', this);
  },
  computed : mapGetters({
    getFavorites : 'getFavorites',
    getCurrentBeers : 'getCurrentBeers'
  })
}
</script>


<style scoped>
.home-main-container {
  padding: 60px 0 60px 0;
}
#search-box {
  width: 40% !important;
  margin-right: 15px;
}
.search-cotainer{
  margin-bottom: 50px;
}

</style>
