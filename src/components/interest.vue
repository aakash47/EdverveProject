<template>
    <div id="home">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
   <div class="container">
       <div class="left">
           <h1 class="bc">Let's </h1>
           <h1 class="bc">Personalize</h1>
           <h3 class="sc">Your </h3>
           <h3 class="sc"> experience</h3>
           <img class="side" src="@/assets/img/level4.jpg" alt="">
       </div>
       <div class="right">
           <form action="" method="">


  <div class="formcontainer">
    <h5 class="lets">One more Question. <img src="@/assets/img/side2.jpg" alt=""></h5>
    <div class="inter">
        <h4>What are your interests ?</h4>
    </div>
    <div class="input">
        <input class="inpt" type="text">
        <span class="inner-circle"><i class="fas fa-search"></i></span>
    </div>
<div class="suggest">
        <h5>Suggested interests</h5>

    </div>
    <div class="row1">
        <div class="radios">
            <input  type="radio"  >
            <label  > Business Skills</label>
        </div>
          <div class="radios">
            <input  type="radio"  >
            <label  > Customer Service</label>
        </div>
          <div class="radios">
            <input  type="radio"  >
            <label  > Communication</label>
        </div>    
    </div>
      <div class="row2">
        <div class="radios">
            <input  type="radio"  >
            <label  > IT Skills</label>
        </div>
          <div class="radios">
            <input  type="radio"  >
            <label  > Finance</label>
        </div>
          <div class="radios">
            <input  type="radio"  >
            <label  > Compliance</label>
        </div>    
    </div>

    <button type="submit">Finish</button>
    
  
  </div>


</form>
       </div>

   </div>

    </div>
</template>
<script>

export default {
    components: {
       
    }
}
</script>




<style scoped>
.container {
    display:flex;
    margin-top: 162px;
    justify-content:space-around;
}
.bc{
    font-size:3rem;
   color:#081848
}
.sc{
    font-size:2rem;
    margin-left:20px;
    color:#fdcf56;
}
.lets{
  margin-left:269px;
}


form {border: 3px solid #f1f1f1;
        border-radius:20px;
            background-color: white;
            box-shadow: 3px 3px 3px 3px #888888;}



button {
   margin-top: 91px;
background-color: #3657B3;
    color: white;
    padding: 10px 30px 10px 30px;
    border-radius: 10px;
    font-family: poppins;
    font-weight: bold;
    border: none;
    width:165px;
    margin-left:150px;
}

button:hover {
  opacity: 0.8;
}
.input{
    margin-top:35px;
    margin-left:35px;
    width: 90px;
 
   
}

.inpt{
    width:350px;
    border-radius: 50px;
    height:30px;
    border: 2px solid #3657B3;
    
    background-size:20px;
    
    
}
.suggest{
    padding-top:20px;
}


.formcontainer {
  padding: 16px;
  border-radius:50px;
  width:500px;
  height:500px;
}
.inter{
    margin-top: 58px;
    margin-left: 35px;
}


/* Change styles for span and cancel button on extra small screens */
.row1{
    margin-top:15px;
    display: flex;
    
    justify-content:space-around;
}
.row2{
    margin-top:25px;
    display: flex;
    width:400px;
    justify-content:space-between;
    margin-left:7px;
}

.radios{
    
    border-radius: 70px;
    box-shadow: 8px 8px 4px 4px rgb(223, 217, 217);
}

.side{
    margin-left: 494px;
    margin-top: -243px;
}


.inner-circle{
        display: inline-block;
    width: 28px;
    height: 26px;
    border-radius: 50%;
    /* border-style: solid; */
    border-width: 1px;
    position: relative;
    top: -28px;
    left: 322px;
    background-color:#3657B3
  
}

.fas{
    color:white;
    padding-left:6px;
}












</style>



