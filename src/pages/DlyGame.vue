<script setup lang="ts">

</script>

<template>


  
  <h1 class="mkdf-tour-booking-title" style="font-size: 28px; color: #303030; font-weight: 700; line-height: 1.2em; margin: 30px 20px">
			Цифровые сервесы для гейминга<a onclick="modalRegionSelectionShow();" style="border-bottom: 1px dotted #303030;"></a></h1>


<body>



<div class="container">
  <img src="../assets/11.jpeg" alt="Avatar" class="image" >
  <div class="middle">
    <div class="text"></div>
  </div>
</div>
  
</body>

</template>

<style>

.container {
    position: relative;
    width: 35%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>