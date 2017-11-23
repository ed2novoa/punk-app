<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-end">
    <a class="navbar-brand" href="/">Welcome to the Punk API App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-menu" aria-controls="navbar-main-menu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar-main-menu">
      <ul class="navbar-nav justify-content-end">
        <li class="nav-item active" @click="makeActiveLink">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" @click="makeActiveLink">
          <router-link class="nav-link" to="favorites">Favorites</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods : {
    // BUG
    // This is just a temporal workaround to handle the active link on the menu navbar
    // This will not work if you write .../#/favorites on the browser
    makeActiveLink (event){
      $(event.target.closest('li')).addClass('active').siblings().removeClass('active');
    }
  }
}
</script>

<style scoped>
li.nav-item{
  margin-right: 5%;
}
#navbar-main-menu .justify-content-end{
  flex-grow: inherit;
  padding-right: 20%;
}
</style>
