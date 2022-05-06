<script setup lang="ts">

</script>

<template>




<body>
    
    <div class="container">
        
        <div class="card-container">
            <input type="radio" name="colors-btn" id="color-1" checked>
            <input type="radio" name="colors-btn" id="color-2">
            <input type="radio" name="colors-btn" id="color-3">
            <input type="radio" name="colors-btn" id="color-4">
            <div class="shoe-area">
                
                    <div class="logo-div">
                        <img src="https://cdn.dribbble.com/users/3138533/screenshots/5959827/dom-_logo.png" alt="">
                    </div>
                    <div class="floating-div">
                    <div class="shoe-1"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Ivi_android.png" alt="red-nike" ></div>
                    <div class="shoe-2"><img src="http://webvybory2012.ru/uploads/posts/2017-03/1490692144_234238947829742389742984792837239847293333333333333333.jpg" ></div>
                    <div class="shoe-3"><img src="https://www.hibiny.com/images/news/2022/263761/75bf35b36737e0a0b3e5a574bf9eae990.jpg" ></div>
                    <div class="shoe-4"><img src="https://s4.afisha.ru/mediastorage/da/ac/02aee0b93936497599565992acda.jpg" ></div>
                    </div>

            </div>
            <div class="text-area">
                <div class="heading-area">
                    <h2>Телевидение</h2>
                    <h4 style="color: black;">Для дома</h4>
                </div>

                    <p class="paragraph-area">
                        Онлайн-сервисы фильмов, сериалов и мультфильмов от мировых и российских киностудий, таких как: (Disney, Universal, Warner Brothers, Paramount, 21th Century Fox, Columbia Pictures, Централ Партнершип, Базелевс, СТС, НТВ, и т.д) для дома.
                    </p>

                    

                <div class="color-selection">
                    <div class="h5-text"><h5>Подписки</h5></div>
                    
                    <div class="color-pick-div">
                        <label for="color-1" class="colors color-1" style="color: aliceblue; text-align: center;"> IVI</label>
                        <label for="color-2" class="colors color-2" style="color: aliceblue; text-align: center;">AMEDIATEKA</label>
                        <label for="color-3" class="colors color-3" style="color: aliceblue; text-align: center;">START</label>
                        <label for="color-4" class="colors color-4" style="color: aliceblue; text-align: center;">PREMIE</label>
                    </div>
                </div>
                <div class="price-and-buy-btn">
                    <h2 class="price-1">149 ₽/мес</h2>
                    <h2 class="price-2">299 ₽/мес</h2>
                    <h2 class="price-3">199 ₽/мес</h2>
                    <h2 class="price-4">299 ₽/мес</h2>
                    <router-link to="/Cash"><button class="buy-btn">Подключиться</button></router-link>
                </div>
            </div>
        </div>
    </div>













    
</body>

 

 


 </template>

<style>








body{ display: flex; flex-wrap: wrap; justify-content: center; background: grey; padding-top: 20px;
background-image: url("https://pbs.twimg.com/media/E3_guXtX0AUihWN.jpg");


}

/* Блоки */
.card{margin-top: -50px;
background: #17141d ;
margin-bottom: 40px;
background: rgb(15, 14, 14);
display: grid;
grid-template-columns: 300px;
grid-template-rows: 210px 210px 80px;
grid-template-areas: "image" "text" "bottom";

border-radius: 18px;
box-shadow: -1rem 0 3rem #000;
text-align: center;
overflow: hidden;
transition: all 0.4s ease;
  color: rgb(255, 255, 255);
  
}

.card-img{
  grid-area: image;
  background: linear-gradient(#fff0 10%, #fff0, 60%, #1d1d1d 100%), url("https://blogcdn.rt.ru//imgs/2021/06/15/13/4718328/189e92f2b5915fc261ba7b7f9276eba59ee68698.jpg");
  background-size: 340px
  }


.card-img1 {
  grid-area: image;
  background: linear-gradient(#fff0 10%, #fff0, 60%, #1d1d1d 100%), url("https://rempc.by/upload/set%20i%20internet/provider/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D0%B2%D0%B0%D0%B9%D0%B4%D0%B5%D1%80%D1%8B.jpg");
  background-size: 340px
  }

.card-img2 {
  grid-area: image;
  background: linear-gradient(#fff0 10%, #fff0, 60%, #1d1d1d 100%), url("https://gold-telecom.ru/img/2/3.jpg");
  background-size: 340px
  }




.card-img3 {
 grid-area: image;
  background: linear-gradient(#fff0 10%, #fff0, 60%, #1d1d1d 100%), url("https://blogcdn.rt.ru//imgs/2021/06/15/13/4718328/189e92f2b5915fc261ba7b7f9276eba59ee68698.jpg");
  background-size: 340px
  }


.card-img4{
  grid-area: image;
  background: linear-gradient(#fff0 10%, #fff0, 60%, #1d1d1d 100%), url("https://miridei.com/files/img/c/idei-dlya-doma/interior-ideas/vstavka.jpg");
  background-size: 340px
  }


.card-img5 {
  grid-area: image;
  background: linear-gradient(#fff0 10%, #fff0, 60%, #1d1d1d 100%), url("https://mobidevices.ru/images/2020/01/Servers.jpg");
  background-size: 340px
  }

.card-img6 {
  grid-area: image;
  background: linear-gradient(#fff0 10%, #fff0, 60%, #1d1d1d 100%), url("https://www.pwc.ru/ru/publications/cloud-cover.jpg");
  background-size: 340px
  }




.card-img7 {
 grid-area: image;
  background: linear-gradient(#fff0 10%, #fff0, 60%, #1d1d1d 100%), url("https://f37d0abc-3fbc-4805-8657-a2fcba03afd1.selcdn.net/uploads/media/90f/90ffed697e99e72a55d58ea67d7a33e48ed8bd5b.png");
  background-size: 340px
  }


.card-discription{
  grid-area: text;
  font-family: roboto;
  margin-top: -10px;
  
  
}

.card-discription > p{
margin: 15px; margin-top: -10px;

}

#visit-header, #visit-state{
  font-family: arial;
  text-transform: uppercase;
  
}

#visit-state{font-size: 18px;
margin-top: -18px; margin-bottom: 20px;
 color: #aaa;
}

#booknowbtn{
 background: #4ba7e9;
   background:
  linear-gradient(#f2eecb, #cfb997);
 grid-area: bottom;
 border: none;
 font-size: 30px;
 color: white;
 margin-top: 20px;
}

#booknowbtn:hover{cursor: pointer; background: red;}

.card:hover{
  transform: translateY(-1rem);
  
}

.card:hover~.card{
  transform: translateX(130px);
  
}

.card:not(:first-child){
  margin-left: -130px;
  
}




#sb{background-image: url("https://miro.medium.com/max/1000/1*HXChk_VSESSUYNR3VgCo_Q.jpeg")}

#yosemite{background-image: url("https://parentology.com/wp-content/uploads/2020/12/swissmediavision1163571314.jpg")}

#marin{background-image: url("https://i.imgur.com/BvrDOz2.jpg")}

a{text-decoration: none;
color: white;}

@keyframes rgb {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

.rgb::after {

  border-radius: 16px;
  filter: blur(8px);
  transform: translateZ(-1px); 
  animation: rgb 6s linear infinite;
}
/* Блоки */




@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');



:root{
    font-family: "Poppins";
    --primary-color-1: hsl(348, 68%, 34%);
    --primary-color-2: hsl(20,94%,34%);
    --primary-color-3: hsl(232,16%,34%);
    --primary-color-4: hsl(0, 0%, 25%);
    --text-area-color: whitesmoke;
    --heading-secondary-color: hsl(0, 0%, 55%);
    --secondary-card-color: whitesmoke;
}





input{
    display: none;
}

.container{

    justify-content: center;
    align-items: center;
margin: 50px;
}

.card-container{
    display: flex;
    flex-direction: row;
    /* background-color: wheat; */
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 0px  rgb(145, 145, 145); 
    border-radius: 0.8rem;
}

.shoe-area{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-color 0.3s ease-in-out;
    border-radius: 0.8rem 0 0 0.8rem
}

.logo-div{
    margin: 2rem 0  0 1.5rem;
    position: absolute;
    opacity: 1;
    top: 0;
    left: 0;
    width: 100%;
    /* background-color: yellowgreen; */
}

.logo-div img{
    width: 70%;
    opacity: 0.1;
}

.floating-div{
    /* background-color: yellowgreen; */
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    align-items: center;
    animation: float 6s ease-in-out infinite;
    box-sizing: border-box; 
}

@keyframes float{
    0%{
        transform: translateY(0%);
    }

    50%{
        transform: translateY(-6%);
    }

    100%{
        transform: translateY(0%);
    }
}

.shoe-area :is(.shoe-1, .shoe-2, .shoe-3, .shoe-4) {
    /* background-color: yellow; */
    position: absolute;
    width: 100%;

    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
}



:is(.shoe-1) img{
    width: 70%;
    opacity: 0;
    transform: rotateZ(-4deg) scale(1.3) translateX(-10%);
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
}


:is(.shoe-2) img{
    width: 60%;
    opacity: 0;
    transform: rotateZ(-4deg) scale(1.3) translateX(-10%);
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
}

:is(.shoe-3) img{
    width: 70%;
    opacity: 0;
    transform: rotateZ(-4deg) scale(1.3) translateX(-10%);
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
}

:is(.shoe-4) img{
    width: 70%;
    opacity: 0;
    transform: rotateZ(-4deg) scale(1.3) translateX(-10%);
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
}
/*  ============= 
            Text styling 
                    ========== */

.text-area{
    background-color: var(--text-area-color);
   
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0 0.8rem 0.8rem  0 
}

.text-area .heading-area{
    padding: 1rem;
}

.heading-area h2{
    font-weight: 800;
    font-size: 2.5rem;
    transition: color 0.3s ease-in-out;
}


   


/*  ============= 
            Available colors
                    ========== */

.color-selection{
    margin: 1rem 1rem 1.5rem 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.8rem;
    box-sizing: border-box;
    /* background-color: wheat; */
    
}

.color-selection h5{
    font-size: 1rem;
}

.color-selection .colors{
    padding: 1rem;
    border-radius: 14%;
    cursor: pointer;
}

.color-pick-div{
    display: inline-block;
    
    column-gap: 0.8rem;
}

.color-selection .color-1{
    background-color: var(--primary-color-1);
}

.color-selection .color-2{
    background-color: var(--primary-color-2);
}

.color-selection .color-3{
    background-color: var(--primary-color-3);
}

.color-selection .color-4{
    background-color: var(--primary-color-4);
}


/*  ============= 
            price-and-buy-btn styling
                             ========== */

.price-and-buy-btn{
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    
}

.price-and-buy-btn :is(.price-1, .price-2, .price-3, .price-4){
    display: none;
    font-weight: 800;
    font-size: 2.5rem;
    transition: color 0.3s ease-in-out;
}

.buy-btn{
    padding: 1em 1.5em;
    font-size: 1.2rem;
    border-radius: 2rem;
    border: none;
    color: whitesmoke;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

/* ========== Themes ======== */

/* Theme 1 */
#color-1:checked ~ .text-area .color-selection .color-pick-div .color-1{
    outline: 2px solid var(--primary-color-1);
    outline-offset: 2px;
}

#color-1:checked ~ .shoe-area{
    background-color: var(--primary-color-1);
}


#color-1:checked ~ .text-area .heading-area h2{
    color: var(--primary-color-1)
}

#color-1:checked ~ .text-area .price-and-buy-btn .price-1{
    display: block;
    color: var(--primary-color-1);
}

#color-1:checked ~* .buy-btn{
    background-color: var(--primary-color-1);
}

/* Theme 2 */
#color-2:checked ~ .text-area .color-selection .color-pick-div .color-2{
    outline: 2px solid var(--primary-color-2);
    outline-offset: 2px;
}

#color-2:checked ~ .shoe-area{
    background-color: var(--primary-color-2);
}


#color-2:checked ~ .text-area .heading-area h2{
    color: var(--primary-color-2)
}

#color-2:checked ~ .text-area .price-and-buy-btn .price-2{
    display: block;
    color: var(--primary-color-2);
}

#color-2:checked ~* .buy-btn{
    background-color: var(--primary-color-2);
}

/* Theme 3 */
#color-3:checked ~ .text-area .color-selection .color-pick-div .color-3{
    outline: 2px solid var(--primary-color-3);
    outline-offset: 2px;
}

#color-3:checked ~ .text-area .price-and-buy-btn .price-3{
    display: block;
    color: var(--primary-color-3);
}

#color-3:checked ~ .shoe-area{
    background-color: var(--primary-color-3);
}

#color-3:checked ~ .text-area .heading-area h2{
    color: var(--primary-color-3)
}

#color-3:checked ~* .buy-btn{
    background-color: var(--primary-color-3);
}


/* Theme 4 */
#color-4:checked ~ .text-area .color-selection .color-pick-div .color-4{
    outline: 2px solid var(--primary-color-4);
    outline-offset: 2px;
}

#color-4:checked ~ .shoe-area{
    background-color: var(--primary-color-4);
}

#color-4:checked ~ .text-area .price-and-buy-btn .price-4{
    display: unset;
    color: var(--primary-color-4);
}

#color-4:checked ~ .text-area .heading-area h2{
    color: var(--primary-color-4)
}


#color-4:checked ~* .buy-btn{
    background-color: var(--primary-color-4);
}

/* Transition when the screen is higher than 1000px */

@media screen and (min-width: 62.5rem){

    #color-1:checked ~ .shoe-area .floating-div .shoe-1 {
        transition-delay: 0.2s;
        animation-delay: 0.3s;
        transform: rotateZ(0);
        z-index: 99;
    }

    #color-1:checked ~ .shoe-area .floating-div .shoe-1 img{
        transition-delay: 0.2s;
        opacity: 1;
    }


    /* Theme 2 */
    #color-2:checked ~ .shoe-area .floating-div .shoe-2 {
        transition-delay: 0.2s;
        transform: rotateZ(0);
        z-index: 99;
    }

    #color-2:checked ~ .shoe-area .floating-div .shoe-2 img{
        transition-delay: 0.2s;   
        opacity: 1;
    }

    /* Theme 3 */
    #color-3:checked ~ .shoe-area .floating-div .shoe-3 {
        transition-delay: 0.2s;   
        transform: rotateZ(0);
        z-index: 99;
    }

    #color-3:checked ~ .shoe-area .floating-div .shoe-3 img{
        transition-delay: 0.2s;   
        opacity: 1;
    }


    /* Theme 4 */
    #color-4:checked ~ .shoe-area .floating-div .shoe-4 {
        transition-delay: 0.2s;
        transform: rotateZ(0);
        z-index: 99;
    }

    #color-4:checked ~ .shoe-area .floating-div .shoe-4 img{
        transition-delay: 0.2s;   
        opacity: 1;
        
    }
}


#color-4:checked ~* .heading-area h2{
    color: var(--primary-color-4)
}



@media screen and (max-width: 62.5rem){
    .container{
        padding: 1rem;  
    }
    
        .card-container{
        display: flex;
        flex-direction: column;
    }

    .shoe-area{
        width: 100%;
        height: 40vw;
        padding: 1rem 0;
        border-radius: 0.8rem 0.8rem 0 0;
    }

    .shoe-area :is(.shoe-1, .shoe-2, .shoe-3, .shoe-4) {
    /* background-color: yellow; */
    position: absolute;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;

    }

    /* Transition for any screen lower than 1000px */

    .shoe-area :is(.shoe-1, .shoe-2, .shoe-3, .shoe-4) {
        /* background-color: yellow; */
        transform: rotateZ(0deg)  translateY(-10%);
        width: 70%;
        margin: 1rem 0;
        opacity: 0;
    }

    :is(.shoe-1, .shoe-2, .shoe-3, .shoe-4) img{
        transform: rotateZ(0) scale(1) ;
        opacity: 1;
    }

    #color-1:checked ~ .shoe-area .floating-div .shoe-1 {
        transition-delay: 0.2s;
        opacity: 1;
        transform: rotateZ(0);
    }

    #color-1:checked ~ .shoe-area .floating-div .shoe-1 img{
        transition-delay: 0.2s;
        opacity: 1;
    }


    /* Theme 2 */
    #color-2:checked ~ .shoe-area .floating-div .shoe-2 {
        transition-delay: 0.2s;
        opacity: 1;
        transform: rotateZ(0);
        
    }

    #color-2:checked ~ .shoe-area .floating-div .shoe-2 img{
        transition-delay: 0.2s;   
        opacity: 1;
    }

    /* Theme 3 */
    #color-3:checked ~ .shoe-area .floating-div .shoe-3 {
        transition-delay: 0.2s; 
        opacity: 1;  
        transform: rotateZ(0);
    }

    #color-3:checked ~ .shoe-area .floating-div .shoe-3 img{
        transition-delay: 0.2s;   
        opacity: 1;
    }


    /* Theme 4 */
    #color-4:checked ~ .shoe-area .floating-div .shoe-4 {
        transition-delay: 0.2s;
        transform: rotateZ(0);
        opacity: 1;
    }

    #color-4:checked ~ .shoe-area .floating-div .shoe-4 img{
        transition-delay: 0.2s;   
        opacity: 1;  
    }

    /* Transition end */

    .logo-div img{
        width: 40%;
    }

    .text-area{
        /* background-color: rgb(114, 91, 114); */
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 0 0  0.8rem 0.8rem 
    }

    .paragraph-area, .color-selection{
        margin: 1.5rem 1rem;
    }
}

/* ====== Phone Size ===== */
@media screen and (max-width: 26.9rem){
    
    .paragraph-area{
        margin: 1rem;
        font-size: 0.8rem;
    }

    .paragraph-area, .color-selection{
        margin: 0.7rem 1rem;
        
    }

    .color-selection{
        display: flex;
        flex-direction: column;
        align-items: unset;
        row-gap: 0.8rem;;
    }

    .price-and-buy-btn{
        padding: 0.5rem 1rem;
        flex-direction: column;
        row-gap: 0.8rem;
        align-items: flex-start;
    }
}


</style>