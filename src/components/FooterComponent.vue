<template>
  <footer class="container-fluid">
    <div class="row justify-content-center">
      <p>Simple Vue.js Excercise by ed2novoa</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data () {
    return {
      msg: 'Welcome foot'
    }
  }
}
</script>


<style scoped>
footer {
  height: 100px;
  background-color: #dfdfdf;
}
footer>div>p{
  color: #444;
  padding-top: 30px;
}
</style>
