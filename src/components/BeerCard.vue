<template>
  <div class="col-md-4">
    <div class="beer-card">
      <div class="beer-card-container">
        <div class="beer-img-container">
          <img :src="beer.image_url" alt="Beer Image">
        </div>
        <div class="beer-desc-container">
          <span class="oi oi-heart"></span>
          <h5 class="beer-name">{{beer.name}}</h5>
          <p class="beer-desc">{{beer.description | minDescription}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ['beer'],
  name: 'BeerCard',
  filters : {
    minDescription(description){
      return description.substring(0,85) + "...";
    }
  }
  // data () {
  //   return {
  //   }
  // }
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
