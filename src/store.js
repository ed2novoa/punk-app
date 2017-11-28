import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    favorites : [],
    currentBeers : []
  },
  getters:{
    getFavorites(state){
      return state.favorites;
    },
    getCurrentBeers(state){
      return state.currentBeers;
    }
  },
  mutations: {
    // Set the state of the current beers to display from the GET Request
    setCurrentBeers(state, beers){
      //Search for beer that already have a favorite state
      const favoritesIds = _.map(state.favorites,'id');
      // console.dir(favoritesIds);
      beers.forEach(function(beer) {
        const index = _.indexOf(favoritesIds, beer.id);
        // console.dir(index);
        if( index >= 0){
         console.log('if in');
          beer.isFavorite = true;
        }
        else {
          // console.log('else in');
          beer.isFavorite = false;
        }
      });
      state.currentBeers = beers;
    },
    addFavorite(state, beer){
      beer.isFavorite = true;
      state.favorites.push(beer);
      // console.dir(state.favorites);
    },
    removeFavorite(state, beer){
      const i = _.findIndex(state.favorites, { id : beer.id });

      beer.isFavorite = false;
      state.favorites.splice(i,1);
      // console.dir(state.favorites);

    },
  },
  actions: {
    setCurrentBeers(context) {
      axios.get('https://api.punkapi.com/v2/beers?per_page=9')
      .then(function (response) {
        // console.log(response);
        context.commit('setCurrentBeers', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});
