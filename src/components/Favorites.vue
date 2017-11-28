<template>
  <div class="container favorites-main-container">
    <div class="row">
      <div class="col-12 form-inline justify-content-center title-container">
        <h3>Your favoritesss...</h3>
      </div>
    </div>
    <div class="row">
      <BeerCard v-for="beer in getFavorites" :beer="beer" :key="beer.id"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import BeerCard from './BeerCard';

export default {
  name: 'Favorites',
  // data () {
  //   return {
  //     msg: 'Favorites'
  //   }
  // },
  components : {BeerCard},
  computed : mapGetters({
    getFavorites : 'getFavorites',
  })
}
</script>


<style scoped>
.favorites-main-container {
  padding: 60px 0 60px 0;
}
.title-container{
  margin-bottom: 46px;
}
</style>
