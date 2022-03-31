<script setup lang="ts">






</script>

<template>





 
 <!-- Слайдер -->
 
<form>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/акция 3.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/акция 2.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/акция 1.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
</form>

 <!-- Тарифы -->

<div class="dom">
  <h1>Тарифы</h1>
  <button type="button" class="btn btn-dark">В частный дом</button>

  <button type="button" class="btn btn-dark left">В квартиру</button>
  
</div>


<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
  <h3 data-test="card-title" class="sc-28dd76b1-2 gZJHSZ">Яркий</h3>
    <p class="card-text">Акционный тарифный план</p>
    <router-link to="/Cash" class="btn btn-primary">Подключить</router-link>
  </div>
 
</div>


<div class="card2" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">В игре</h3>
    <p class="card-text">Обычный Гейминг</p>
    <router-link to="/Cash" class="btn btn-primary">Подключить</router-link>
  </div>

</div>



<div class="card3" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">скорость</h5>
    <p class="card-text">описание</p>
    <router-link to="/Cash" class="btn btn-primary">Подключить</router-link>
  </div>
  
</div>






<h2>Как связаться:</h2>
<p>vk</p>
<p>vk</p>
<p>vk</p>
<p>тел: 8372498324982</p>
</template>

<style>

*, *:after {box-sizing: border-box;}
.carousel-inner {
  width: 800px;
  margin: 50px auto 0;
  position: relative;
}

.carousel-inner img {
  max-width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 2;
  box-shadow: 4px 4px 20px 0 rgba(0,0,0,.25)
}


.btn {
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
}

.btn:hover {
    background-color: #d9ff00; 
    color: rgb(0, 0, 0);
}



.card {
width: 70%;
margin: auto;
height: 180px;
display: inline-block;
border: 1px solid black;
margin-top: 2%;
margin-left: 2%;
margin-right: 2%;
}

.card2 {
width: 70%;
margin: auto;
height: 180px;
display: inline-block;
border: 1px solid black;
margin-top: 2%;
margin-left: 2%;
margin-right: 2%;
}


.card3 {
width: 70%;
margin: auto;
height: 180px;
display: inline-block;
border: 1px solid black;
margin-top: 2%;
margin-left: 2%;
margin-right: 2%;
}







</style>