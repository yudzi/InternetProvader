<script setup lang="ts">



</script>                                                                                                                                                                                                                                                                                                                                     

<template>


  
  <h1 class="mkdf-tour-booking-title" style="font-size: 40px; color: #303030; font-weight: 700; line-height: 1.2em; margin: 30px 20px">
			Подключиться к DOM.NET<a onclick="modalRegionSelectionShow();" style="border-bottom: 1px dotted #303030;"></a></h1>


<form class="PPP">



<div class="familia">
  <label for="name">Фамилия</label>


			<input type="text" placeholder="Фамилия" name="user_fam">
            			<span class="mkdf-tours-input-icon">
				<i class="lnr lnr-user" style="line-height: 39px;"></i>
			</span>
		</div>


<div class="nama">
    <label for="name">Имя</label>
			<input type="text" placeholder="Имя" name="user_name">
			<span class="mkdf-tours-input-icon">
				<i class="lnr lnr-user" style="line-height: 39px;"></i>
			</span>
		</div>


<div class="ochestvo">
    <label for="name">Отчество</label>
			<input type="text" placeholder="Отчество" name="user_otch">
			<span class="mkdf-tours-input-icon">
				<i class="lnr lnr-user" style="line-height: 39px;"></i>
			</span>
		</div>









<div class="telefon">
     <label for="name">Тел:</label>
			<input type="text" class="tel" placeholder="Телефон" name="user_phone">
			<span class="mkdf-tours-input-icon">
				<i class="lnr lnr-phone-handset" style="line-height: 39px;"></i>
			</span>
		</div>




<div class="ulicha">
     <label for="name">Услуга</label>
				<input id="street" type="text" name="street" placeholder="Улица">
				<span class="mkdf-tours-input-icon">
					<i class="lnr lnr-apartment" style="line-height: 39px;"></i>
				</span>
			</div>




<div class="domm" style="float: left; width: 48%;">
     <label for="name">Дом</label>
				<input id="building" type="text" name="building" placeholder="Дом">
				<span class="mkdf-tours-input-icon">
					<i class="lnr lnr-home" style="line-height: 39px;"></i>
				</span>
			</div>







<div class="kvartira" style="float: right: 15%;">
     <label for="name">Квартира</label>
				<input type="text" placeholder="Квартира" name="user_flat">
				<span class="mkdf-tours-input-icon">
					<i class="lnr lnr-enter" style="line-height: 39px;"></i>
				</span>
			</div>



		<router-link to="#" class="alim">Подключить</router-link>




</form>





</template>

<style >

html, body{
    margin:0;
    padding:0;
    
}


body {
  margin: 0;
}

.mkdf-tour-booking-title{
	text-align: center;
}


label {
  width: 150px;
  display: inline-block;
  vertical-align: top;
  margin: 10px;
}


.alim {
    margin-top: 20px ;
    margin-left: 420px;
box-shadow: 8px 8px 7px -2px #2a133c;
	background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
	background-color:#7892c2;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#f8f2f2;
	font-family:Arial;
	font-size:17px;
	padding:17px 45px;
	text-decoration:none;
	text-shadow:0px 2px 0px #283966;
}

.alim:hover {
	background:linear-gradient(to bottom, #ced7cf 5%, #a4215850 100%);
	background-color:#dcdfe4;
}
.alim:active {
	position:relative;
	top:1px;
}



.familia{
margin-left: 5%;
}
.nama{
margin-left: 5%;
}

.ochestvo{
margin-left: 5%;
}

.telefon{
margin-left: 5%;
}
.ulicha{
margin-left: 5%;
}

.domm{
margin-left: 5%;
}

.kvartira {
margin-left: 56%;
}


.PPP{
    width: 660px;
    height: 850px;
     background-color: #a08cc0;
     border: 3px solid #fff; 
     border-radius: 20px; 
     display: inline-block;
     padding: 17px;
     resize: vertical;
     margin: 30px;
	 left: 25%;
}

</style>