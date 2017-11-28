<template>
  <div class="col-md-4">
    <div class="beer-card">
      <div class="beer-card-container">
        <div class="beer-img-container">
          <img :src="beer.image_url" alt="Beer Image">
        </div>
        <div class="beer-desc-container">
          <span @click="toogleFavorite" class="oi oi-heart" :data-id="beer.id"></span>
          <h5 class="beer-name">{{beer.name}}</h5>
          <p class="beer-desc">{{beer.description | reduceDescription}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ['beer'],
  name: 'BeerCard',
  mounted(){
    this.isFavorite();
  },
  updated(){
    this.isFavorite();
  },
  filters : {
    // A simple method to reduce the string to show on the card
    reduceDescription(description){
      return description.substring(0,85) + "...";
    }
  },
  methods:{
    // Toogles the beer favorite state
    toogleFavorite(event){
      //first it toggles the heart-icon class
      $(event.target.closest('span')).toggleClass('favorite');

      // Checks if it is not a favorite one yet
      if (!this.beer.isFavorite){
        // console.log("if");
        this.$store.commit('addFavorite', this.beer);
      } else {
        //if the app is in the Favorites page it uses a fade out effect to un-favorite it
        if (this.$router.history.current.name === 'Favorites'){
          const vm = this;
          $(event.target).closest('.beer-card').css('opacity', '0');
          setTimeout(() => vm.$store.commit('removeFavorite', this.beer),
          500 );
        }
        // If the app is in the Home page it doesn't uses the effect
        else {
          this.$store.commit('removeFavorite', this.beer);
        }
      }
    },
    isFavorite(){
      // Checks and sets the favorite class to the corresponding card state
      if (this.beer.isFavorite === true){
        $('span[data-id="'+this.beer.id+'"]').addClass('favorite');
      } else {
        $('span[data-id="'+this.beer.id+'"]').removeClass('favorite');
      }
    }
  }
}

</script>


<style scoped>
.beer-card{
  border-width: thin;
  border-style: solid;
  border-radius: 1rem;
  border-color: #999;
  height: 200px;
  margin-bottom: 20px;
  background-color: #e3e3e3;
  transition: opacity 500ms linear;
}
.beer-img-container{
  width: 105px;
  float: left;
  text-align: center;
}
.beer-img-container:after{
  content: "";
  clear: both;
}
.beer-img-container>img{
  height: 170px;
}
.beer-card-container{
  padding: 10px;
}
.beer-desc-container{
  padding: 20px 10px;
  margin-left: 10px;
}
.oi-heart{
  color: #fff;
  font-size: 1.5em;
  position: absolute;
  right: 30px;
  top: 14px;
  transition: all 0.8s ease;
  -webkit-transition: all 0.8s ease;
  -o-transition: all 0.8s ease;
  -moz-transition: all 0.8s ease;
}
.oi-heart:hover{
  color: #ff9b9b;
}
.oi-heart.favorite{
  color: #ff143f;
}
</style>
