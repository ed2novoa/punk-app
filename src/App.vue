<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent';

export default {
  name: 'app',
  components : {HeaderComponent, FooterComponent}
}
</script>

<style>
#app {

}
</style>
