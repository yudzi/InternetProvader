<script setup lang="ts">

</script>

<template>
<body>



<table class="entire-page">
  
  <tr>
    
    <td>
      
      <table class="email-body">
        
        <tr>
          
          <td class="news-section">
          
            <h1>  Видеонаблюдение</h1>
            
            <a href="https://blog.codepen.io/documentation/pro-features/pro-teams/"><img src="https://svs.kh.ua/image/cache/catalog/image/catalog/uslugi/ban-home.webp"></a>
            <h1>Все преимущества сервиса — в одной подписке</h1>
            <p> Что дает подписка: 
                <br>Смотрите прямую трансляцию с видеокамеры без ограничений по качеству
                <br>Следите за домом из удобного приложения, когда вы на работе или в отпуске
                <br>Получайте Push-уведомления о подозрительных событиях в кадре
                <br>Подберите для себя необходимое количество дней хранения видео
                
  
        </p>
            <div class="alm">
                <p><router-link to="/Cash">Подключиться &rarr;</router-link></p>
            </div>
            
            
          </td>
          
        </tr>
        </table>
        </td>
        </tr>

        </table>

    </body>
    
  







 <div>
     <H1>Акция! Получайте подписку на сервис в подарок</H1>
     </div>

<div class="ufive-card">

  <div class="u5-card">
    <div class="u5-text"><span>DOM.</span></div>
    <div class="u5-line"></div>
    <h4>6 месяцев</h4>
    <span class="u5-author">подписки в подарок<br>
«Полная запись 7 дней хранения»</span>
    <p>при покупке камер за полную стоимость<br>
    разовая оплата при покупке<br>
    для всех
    </p>
    <a class="u5-btn" href="#"><span></span></a>
    
  </div>

  <div class="u5-card">
    <div class="u5-text"><span>DOM.</span></div>
    <div class="u5-line"></div>
    <h4>24 месяца</h4>
    <span class="u5-author">подписки в подарок<br>
«Полная запись 7 дней хранения»

</span>
    <p>при покупке камер
в рассрочку от Ростелекома <br>
350 руб./мес. на 24 месяца<br>

для абонентов интернета, ТВ или телефонии от Ростелекома


</p>
    <a class="u5-btn" href="#"><span></span></a>

  </div>
</div>
 

















</template>


<style>
body {
  margin: 0;
}


.alm{
     padding: 30px;
  font-size: 25px;
  
}

h1 {
  font-size: 30px;
}

a {
  color: #4e93e1;
  font-weight: bold;
  text-decoration: none;
}

.entire-page {
 
  width: 100%;
  padding: 20px 0;
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  line-height: 1.5;
}

.email-body {
  max-width: 600px;
  min-width: 320px;
  margin: 0 auto;
  background: white;
  border-collapse: collapse;

}

.email-header {
  background: black; 
  padding: 30px;
}

.news-section {
  padding: 20px 30px;
}

/*blok*/

.ufive-card {
  width: 100%;
  line-height: 1.3;
}
.ufive-card p {
  font-size: 15px;
  font-family: "Cuprum";
}
.ufive-card h4 {
  margin-top: 0px;
  font-size: 30px;
  letter-spacing: 1px;
  margin-bottom: 1em;
  font-family: "Cuprum";
}
.u5-text {
  position: absolute;
  opacity: 0.2;
  letter-spacing: -0.5rem;
  font-size: 140px;
  font-weight: 700;
  top: -10px;
  font-family: "Roboto";
}
.u5-card p,
h4,
span {
  color: #fafafa;
}
.u5-line {
  width: 20px;
  height: 3px;
  background: white;
}
.u5-card {
  margin: 50px;
  float: left;
  margin-left: 7.5%;
  position: relative;
  width: 350px;
  min-height: 380px;
  overflow: hidden;
  background: #393939;
  padding: 60px 30px;
 
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px #393939;
}
.u5-author {
  font-family: "Cuprum";
  color: #fafafa;
  opacity: 0.8;
  font-size: 18px;
  list-style: none;
}
.u5-date {
  font-family: "Cuprum";
  opacity: 0.8;
  font-size: 15px;
  width: 100%;
  position: relative;
}
.u5-date span {
  color: #f3be81;
  position: absolute;
  right: 0px;
  top: 30px;
}
.u5-btn {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  line-height: 1;
  padding-left: 26px;
  text-transform: uppercase;
  padding-bottom: 4px;
  font-size: 14px;
  font-family: "Cuprum";
}
@media (min-width: 800px) {
  .u5-btn {
    font-size: 14px;
    padding-left: 36px;
    font-family: "Cuprum";
  }
}
.u5-btn::before {
  content: "";
  display: block;
  position: absolute;
  height: 1px;
  background: currentColor;
  left: 0;
  width: 20px;
  top: 50%;
  margin-top: -1px;
  transition: transform 0.3s cubic-bezier(0.42, 0.01, 0.23, 1);
  transform-origin: left;
}
.u5-btn:hover::before {
  transform: scaleX(1.333);
}
@media (min-width: 800px) {
  .u5-btn::before {
    width: 30px;
  }
}
.u5-btn span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.42, 0.01, 0.23, 1);
}
.u5-btn:hover span {
  transform: translateX(12px);
}
@media (min-width: 800px) {
  .u5-btn:hover span {
    transform: translateX(18px);
  }
}
@media (max-width: 765px) {
  .u5-card {
    margin-left: 0;
    top: 0;
    margin-top: 35px;
  }
}



</style>