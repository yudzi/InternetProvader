<script setup lang="ts">
</script>







<!--Header-->
<template>
<main>
<header>
<div>



 <div class="navbar">
  <div class="logo">
    <h2><router-link to="/">DOM.NET</router-link></h2>
  </div>
  <ul class="links">
    <li><router-link to="/">Интернет</router-link></li>
    <li><router-link to="/Uslugi">Пакет услуг</router-link></li>
    <li><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Телевидение
          </a>
          
            <li><router-link class="dropdown-item" to="DlyDom">Для дома</router-link></li>
            <li><router-link class="dropdown-item" to="DlyGame">Для квартир</router-link></li>
        </li>
    <li><router-link to="/Nabludenie">Видеонаблюдение</router-link></li>
  </ul>
  <div class="right"><router-link to="Kabinet"><button>Личный кабинет</button></router-link></div>
 
</div>








      <router-view></router-view>

</div>
</header>
</main>


<!-- Site footer -->
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h6>О НАС</h6>
        <p class="text-justify">Выгодные тарифы предлагает компания DON.net. Это надёжный провайдер, который предоставляет скоростной интернет для частных и корпоративных клиентов. Всё, что нужно сделать для подключения — подать заявку по телефону или онлайн.</p>
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Информация</h6>
        <ul class="footer-links">
          <li><router-link to="/">Интернет</router-link></li>
          <li><router-link to="/Uslugi">Пакет Услуг</router-link></li>
          <li><router-link to="/Nabludenie">Видеонаблюдени</router-link></li>
         
        </ul>
      </div>


      <div class="col-xs-6 col-md-3">
        <h6>Телевидение</h6>
        <ul class="footer-links">
          <li><router-link to="/DlyDom">Для Дома</router-link></li>
          <li><router-link to="/DlyGame">Для Гейминга</router-link></li>
       

        </ul>
        
      </div>
    </div>
    <hr>
     <p class="copyright-text">DOM.net &copy; Таганрог 2022        </p> 
  </div>

</footer>







</template>


<style>

html, body{
    margin:0;
    padding:0;
   
}

@import url("https://fonts.googleapis.com/css?family=Lacquer|Nunito&display=swap");
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");

body {
  margin: 0;
  background-image: url(https://www.zastavki.com/pictures/originals/2015/Backgrounds_Round_glare__red_background_100077_.jpg);
}

* {
  box-sizing: border-box;
  transition: 0.4s ease all;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
}
.navbar {
  background: #2d2828;
  color: #fff;

  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
}
.navbar .logo {
  cursor: pointer;
  font-family: "Lacquer";
}
.navbar ul.links {
  font-family: "Nunito";
  margin-left: auto;
  margin-right: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  transition: 0.4s ease all, 0s ease background;
}
.navbar ul.links li {
  text-transform: uppercase;
  padding: 0 15px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease all, 0s ease margin;
}
.navbar ul.links li a {
  text-decoration: none;
  color: #fff;
}
.navbar ul.links li:hover {
  background: #ffc600;
  cursor: pointer;
}
.navbar ul.links li:hover a {
  color: #b83131;
}
button {
  background: #ffc600;
  outline: none;
  font-weight: bold;
  padding: 10px 18px;
  border-radius: 25px;
  border: 1px solid #e6b200;
  letter-spacing: 1px;
}
button:hover {
  cursor: pointer;
  transform: scale(1.1);
  color: white;
  background: rgb(168, 42, 42);
  border-color: #000;
}
.content {
  background-size: cover;
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.content h2 {
  color: #ffc600;
}
.navbar.sticky {
  position: fixed;
  z-index: 40;
}
.navbar.sticky ~ main {
  position: relative;
  z-index: 20;
  top: 65px;
}
section {
  background: #000;
  color: #ffc600;
  padding: 20px;
  font-family: "Lacquer";
  font-weight: bold;
  letter-spacing: 0.5px;
}
@media screen and (max-width: 850px) {
  .navbar .right {
    height: 0;
    overflow: hidden;
  }
  .toggle {
    position: absolute;
    top: 32.5px;
    right: 20px;
    z-index: 99;
    transform: translateY(-50%);
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .toggle > * {
    width: 80%;
    height: 2px;
    background: #fff;
    margin: 3px 0;
  }
  .navbar.collapsed .toggle .line1 {
    transform: rotate(-45deg) translate(-4px, 5px);
  }
  .navbar.collapsed .toggle .line2 {
    opacity: 0;
  }
  .navbar.collapsed .toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
  .navbar.collapsed .logo {
    position: absolute;
    z-index: 44;
  }
  .navbar .links {
    position: fixed;
    background: #080808;
    font-family: "Nunito";
    z-index: 40;
    top: 0;
    left: -100%;
    flex-direction: column;
    width: 45vw;
    height: 100vh;
  }
  .navbar .links li:first-child {
    margin-top: 80px;
  }
  .navbar.collapsed .links {
    left: 0;
  }
  .navbar.collapsed .links a {
    color: #fff;
  }
  .navbar.collapsed .links li {
    width: 100%;
  }
  .navbar.collapsed .links li:hover a {
    color: #080808;
  }
  .navbar.collapsed .right {
    position: fixed;
    font-family: "Nunito";
    width: 45vw;
    text-align: center;
    height: auto;
    bottom: 40px;
    left: 22.5vw;
    transform: translateX(-50%);
    z-index: 45;
  }
  .navbar.collapsed ~ main {
    filter: blur(1px);
    opacity: 0.8;
  }
  .navbar.sticky {
    position: fixed;
    z-index: 40;
  }
}




/*kjj*/
.site-footer
{
  background-color:#222328;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
  display: inline-flex
  ;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;

}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}



</style>

