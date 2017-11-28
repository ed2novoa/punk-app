<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-end">
    <a class="navbar-brand" href="/">A Punk API App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-menu" aria-controls="navbar-main-menu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar-main-menu">
      <ul class="navbar-nav justify-content-end">
        <li class="nav-item">
          <router-link id="home-link" class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link id="favorites-link" class="nav-link" to="favorites">Favorites</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
li.nav-item{
  margin-right: 5%;
}
#navbar-main-menu .justify-content-end{
  flex-grow: inherit;
  padding-right: 100px;
}
.router-link-exact-active{
  color : #fff !important;
}
</style>
