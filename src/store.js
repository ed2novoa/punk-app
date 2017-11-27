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
      setCurrentBeers(state, beers){
        beers.forEach(function(obj) { obj.isFavorite = false; });
        state.currentBeers = beers;
      },
      addFavorite(state, beer){
        state.favorites.push(beer);
      },
      removeFavorite(state, beer){
        const i = state.favorites.findIndex(beer);
        state.favorites.splice(i,1);
      },
    }
});
