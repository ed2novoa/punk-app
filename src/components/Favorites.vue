<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Favorites',
  data () {
    return {
      msg: 'Favorites'
    }
  },
  computed : mapGetters({
    getFavorites : 'getFavorites',
  })
}
</script>


<style scoped>

</style>
