<script setup lang="ts">
</script>

<template>
<div>




 <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="/"><img src="" alt="logo">DOM.NET</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li class="nav-item dropdown">
          <router-link class="nav-link active" aria-current="page" to="/">Интернет</router-link>
          
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/Uslugi">Пакет Услуг</router-link>
          
        </li>


    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Цифровые сервесы
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="DlyDom">Для дома</router-link></li>
            <li><router-link class="dropdown-item" to="DlyGame">Для гейминга</router-link></li>
          </ul>
        </li>

        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/Nabludenie">Видеогаблюдение </router-link>
        </li>
      </ul>
      <form class="d-flex">
       
        <button class="btn btn-outline-success" type="submit">Личный кабинет</button>

      </form>
     
    </div>
  </div>
</nav>
 

      <router-view></router-view>

</div>
</template>


<style>



.dom{
  margin-left: 2%;
  margin-right: 2%;

}

.left{
  margin-left: 10%;
}

.slider{
width: 70%;
margin: auto;
border: 1px solid black;
height: 400px;
margin-top: 2%;
}

.slider h1 {
line-height: 400px;
vertical-align: middle;
}

.slider:hover {
background-color: blue;
transition: color 0.3 ease-out 20ms;
}

.slider:hover h1{
color: red; 
transition: color 0.7 ease-out 20ms;
}








</style>

