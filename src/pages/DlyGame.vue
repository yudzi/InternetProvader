<script setup lang="ts">

</script>

<template>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Card</title>
</head>

    
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
                    <div class="shoe-1"><img src="https://img.championat.com/s/735x490/news/big/l/w/skvosh-triatlon-zorbing-chto-vybrat-v-2019_15488563261718964122.jpg" alt="red-nike" ></div>
                    <div class="shoe-2"><img src="https://music-lord.com/mp3/796897.png" ></div>
                    <div class="shoe-3"><img src="https://4brain.ru/blog/wp-content/uploads/2018/05/%D0%BF%D0%BE%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%8B.jpg" ></div>
                    <div class="shoe-4"><img src="https://brod.kz/media/news/w1ih6h/1562325442wxvlf-740x.jpg" ></div>
                    </div>

            </div>
            <div class="text-area">
                <div class="heading-area">
                    <h2>Телевидение</h2>
                    <h4 style="color: #000;">Для квартир</h4>
                </div>

                    <p class="paragraph-area">
                        Онлайн-сервис лучших сериалов планеты (по версии IMDb). Премьеры новых проектов HBO одновременно со всем миром и вся библиотека студии, а также хиты ведущих студий мира (FOX, Showtime, Starz, BBC, Sony Pictures) и новые российские сериалы. Возможность просмотра в профессиональном дубляже и на языке оригинала. Более 300 сериалов, художественные и документальные фильмы, концерты мировых звезд, стендап-шоу и многое другое.
                    </p>

                    

                <div class="color-selection">
                    <div class="h5-text"><h5>Подписки</h5></div>
                    
                    <div class="color-pick-div">
                        <label for="color-1" class="colors color-1" style="color: aliceblue; text-align: center;">Спорт</label>
                        <label for="color-2" class="colors color-2" style="color: aliceblue; text-align: center;">Детские</label>
                        <label for="color-3" class="colors color-3" style="color: aliceblue; text-align: center;">Познавательные</label>
                        <label for="color-4" class="colors color-4" style="color: aliceblue; text-align: center;">Кино</label>
                    </div>
                </div>
                <div class="price-and-buy-btn">
                    <h2 class="price-1">249 ₽/мес</h2>
                    <h2 class="price-2">199 ₽/мес</h2>
                    <h2 class="price-3">149 ₽/мес</h2>
                    <h2 class="price-4">499 ₽/мес</h2>
                    <router-link to="/Cash"><button class="buy-btn">Подключиться</button></router-link>
                </div>
            </div>
        </div>
    </div>


</template>

<style>
body {
  margin: 0;
}


</style>