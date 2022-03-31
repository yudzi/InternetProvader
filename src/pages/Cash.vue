<script setup lang="ts">



</script>                                                                                                                                                                                                                                                                                                                                     

<template>


  
  <h1 class="mkdf-tour-booking-title" style="font-size: 28px; color: #303030; font-weight: 700; line-height: 1.2em; margin: 30px 20px">
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



		<router-link to="#" class="button">Подключить</router-link>




</form>





</template>

<style >

label {
  width: 110px;
  display: inline-block;
  vertical-align: top;
  margin: 6px;
}


.button {
    margin-top: 10px ;
    margin-left: 380px;
box-shadow: 8px 8px 7px -2px #9f70c5;
	background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
	background-color:#7892c2;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Arial;
	font-size:10px;
	padding:17px 45px;
	text-decoration:none;
	text-shadow:0px 2px 0px #283966;
}

.button:hover {
	background:linear-gradient(to bottom, #4d6d52 5%, #e60764 100%);
	background-color:#dcdfe4;
}
.button:active {
	position:relative;
	top:1px;
}



.familia{
margin-left: 10%;
}
.nama{
margin-left: 10%;
}

.ochestvo{
margin-left: 10%;
}

.telefon{
margin-left: 10%;
}
.ulicha{
margin-left: 10%;
}

.domm{
margin-left: 10%;
}

.kvartira {
margin-left: 10%;
}


.PPP{
    width: 560px;
    height: 350px;
     background-color: #a08cc0;
     border: 3px solid #fff; 
     border-radius: 20px; 
     display: inline-block;
     padding: 12px;
     resize: vertical;

}

</style>