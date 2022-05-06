<script setup lang="ts">






</script>

<template>
 <!-- Слайдер -->
 
<form>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/55.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/66.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/77.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
</form>

 

<!--Тариф 1-->
<div class="price col-md-12">
  <h1 class="mkdf-tour-booking-title" style="font-size: 45px; color: #303030; font-weight: 700; line-height: 1.2em; margin: 30px 20px">
			Тарифы<a onclick="modalRegionSelectionShow();" style="border-bottom: 1px dotted #303030;"></a></h1>
  <div class="pricing-table">
    <div class="plan">
      <h3 class="name">Ярий</h3>
      <h4 class="price">500 руб<span>/мес</span></h4>
      <ul class="details">
        <li><strong>Скорость 80 Мбит/сек </strong> </li>
        <li><s>Мобильная связь</s></li>
        <li><s>Видеонаблюдение</s></li>
      </ul>
      <h5 class="order"><router-link to="/Cash">Подключить</router-link></h5>
    </div>



    <!--Тариф2-->
    <div class="plan">
      <h3 class="name">Премиум</h3>
      <h4 class="price">750 руб<span>/мес</span></h4>
      <ul class="details">
        <li><strong>Скорость 100 Мбит/сек</strong></li>
        <li><strong>Мобильная связь</strong> </li>
        <li><strong>Видеонаблюдение</strong> </li>
      </ul>
      <h5 class="order"><router-link to="/Cash">Подключить</router-link></h5>
    </div>


    <!--Тариф 3-->
    <div class="plan">
      <h3 class="name">Гейминг</h3>
      <h4 class="price">1000 руб<span>/мес</span></h4>
      <ul class="details">
        <li><strong>150 Мбит/сек</strong> </li>
         <li><strong>Бонусы в играх</strong> </li>
        <li><strong>Скидки на игавую технику</strong> </li>
      </ul>
      <h5 class="order"><router-link to="/Cash">Подключить</router-link></h5>
    </div>
  </div>
</div>
<br><br>



<!--Infomation-->


<body>

<!-- Форма обратной связь -->
<div class="contact-form-container">
  <div class="contact-us">
    <div class="contact-header">
      <h1>
        ОБРАТНАЯ СВЯЗЬ
      </h1>
    </div>
    <div class="social-bar">
      
    </div>
  </div>
  <div class="header">
    <h1>
     Отправить нам сообщение
    </h1>
    <h2>
      Используйте форму чтобы связаться с нами.
    </h2>
  </div>
  <div class="address">
    <i class="fas fa-map-marker-alt"></i>
    <h3>
      г. Таганрог
    </h3>
   
  </div>
  <div class="phone">
    <i class="fas fa-phone-alt"></i>
    <h3>
      +79185056885
    </h3>
  </div>
  <div class="email">
    <i class="fas fa-envelope"></i>
    <h3>
     dom.net@gmail.com
    </h3>
  </div>
  <div class="contact-form">
    <form>
      <input placeholder="Ваше имя" type="text" /><input placeholder="Ваш email" type="email" /><textarea placeholder="Чем мы можем помочь..." rows="4"></textarea><button type="button">ОТПРАВИТЬ</button>
    </form>
  </div>
</div>
<!-- Форма обратной связь -->
 


</body>
												                            



</template>

<style>





body {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  justify-items: center;
  align-items: center;
  margin: 50px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Форма обратной связь */
.contact-form-container {
  background: #f4f3f3;
  font-family: "Arial", sans-serif;
  margin: 100px;
}

.contact-us {
  position: relative;
  width: 250px;
  background: #309e99;
  overflow: hidden;
}
.contact-us:before {
  position: absolute;
  content: "";
  bottom: -50px;
  left: -100px;
  height: 250px;
  width: 400px;
  background: #ffdd40;
  transform: rotate(25deg);
}
.contact-us:after {
  position: absolute;
  content: "";
  bottom: -80px;
  right: -100px;
  height: 270px;
  width: 400px;
  background: #6f309e;
  transform: rotate(-25deg);
}

.contact-header {
  color: white;
  position: absolute;
  transform: rotate(-90deg);
  top: 120px;
  left: -40px;
}
.contact-header h1 {
  font-size: 1.5rem;
}

.social-bar {
  position: absolute;
  bottom: 20px;
  left: 75px;
  z-index: 1;
  width: 100px;
}
.social-bar ul {
  list-style-type: none;
}
.social-bar ul li {
  display: inline-block;
  color: #ffdd40;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  margin-right: -4px;
  font-size: 1.2rem;
}

.header {
  text-align: center;
  padding: 20px 0;
  color: #444;
}
.header h1 {
  font-weight: normal;
}
.header h2 {
  margin-top: 10px;
  font-weight: 300;
  font-size: 18px;
}

.address, .email, .phone {
  text-align: center;
  padding: 20px 0;
  color: #444;
}
.address h3, .email h3, .phone h3 {
  font-size: 1rem;
  font-weight: 300;
}
.address i, .email i, .phone i {
  color: #6f309e;
  font-size: 1.7rem;
  margin-bottom: 20px;
}

form {
  position: relative;
 
  margin: 0 auto;
  padding: 20px;
  
}
form input, form textarea {
  background: white;
  display: block;
  margin: 20px auto;
  width: 100%;
  border: 0;
}
form input {
  height: 40px;
  line-height: 40px;
  outline: 0;
  border-bottom: 1px solid rgba(68, 68, 68, 0.3);
  font-size: 1rem;
  color: rgba(68, 68, 68, 0.8);
}
form textarea {
  border-bottom: 1px solid rgba(68, 68, 68, 0.3);
  resize: none;
  outline: none;
  font-size: 1rem;
  font-family: "Arial";
  color: rgba(68, 68, 68, 0.8);
}
form button {
  position: absolute;
  display: block;
  height: 40px;
  width: 250px;
  left: 155px;
  border: 0;
  border-radius: 20px;
  bottom: -20px;
  background: #6f309e;
  color: white;
  font-size: 1.1rem;
  font-weight: 300;
  outline: none;
}

.contact-form {
  padding-bottom: 40px;
}


.contact-form-container {
  width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 2fr;
  grid-template-areas: "contact-us header header header" "contact-us address phone email" "contact-us contact-form contact-form contact-form";
}

.contact-us {
  grid-area: contact-us;
}

.header {
  grid-area: header;
}

.address {
  grid-area: address;
}

.phone {
  grid-area: phone;
}

.email {
  grid-area: email;
}

.contact-form {
  grid-area: contact-form;
}







/*price*/
@import url("https://fonts.googleapis.com/css?family=Pacifico");
.heading {
  font-family: "Pacifico", cursive;
  font-size: 30px;
}

.price {
  padding: 5% 10%;
  text-align: center;
  margin-bottom: -8%;
  
}
.pricing-table {
  color: #363b3d;
  margin-top: 3%;
}
.pricing-table ul {
  list-style-type: none;
  
}
.pricing-table h3,
.pricing-table h4 {
  padding: 0;
  margin: 0;
}
.plan {
  box-sizing: border-box;
  width: 33%;
  background-color: #fff;
  display: inline-block;
  text-align: center;
  position: relative;
  

}
.pricing-table h3.name {
  font-size: 20px;
  background-color: #546e7a;
  padding: 15px;
  color: #fff;
}
.pricing-table h4.price {
  font-size: 40px;
  color: #fff;
  padding: 20px 30px;
  background-color: #a338d0;
  line-height: 40px;
}
.pricing-table span {
  font-size: 16px;
  font-style: italic;
}
.pricing-table li {
  border-bottom: 1px solid #b3b9c4;
  padding: 15px;
  display: block;
}
.pricing-table h5.order {
  padding: 30px;
  font-size: 17px;
}
.pricing-table a {
  text-decoration: none;
  color: #fff;
  background-color: #546e7a;
  padding: 10px 20px;
}
.plan:nth-child(2n) {
  box-shadow: 0px 0px 10px #424242;
  z-index: 100;
}

@media (max-width: 1100px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  .price {
    padding: 5% 1%;
  }
  .plan {
    float: left;
    width: 33%;
  }
}
@media (max-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .price {
    padding: 5% 10%;
  }
  .plan {
    float: none;
    width: 100%;
  }
}








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



.carousel-inner {

 
  width: 1000px;
  height: 500px;
  position: relative;
  overflow: hidden;
}


.carousel-item{
    width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.7s ease-in-out;
}





</style>