<template>
  <div class="container home-main-container">
    <div class="row">
      <div class="col-12 form-inline justify-content-center">
        <label for="search-box">Search by your favorite beer name:&nbsp;&nbsp;&nbsp;</label>
        <input class="form-control" type="text" id="search-box" v-model="searchTerm">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <BeerCard v-for="n in 10"/>
      </div>
    </div>
  </div>
</template>

<script>
import BeerCard from './BeerCard';

export default {
  name: 'Home',
  data () {
    return {
      searchTerm: ''
    }
  },
  components : {BeerCard}
}
</script>


<style scoped>
.home-main-container {
  padding: 60px 0 60px 0;
}
#search-box {
  width: 40% !important;
}

</style>
