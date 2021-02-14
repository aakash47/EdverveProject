<template>
    <div id="home">

   <div class="container">
       <div class="left">
           <h1 class="bc">Let's </h1>
           <h1 class="bc">Personalize</h1>
           <h3 class="sc">Your experience</h3>
           <h3 class="sc"> experience</h3>
           <img class="side" src="@/assets/img/side.jpg" alt="">
       </div>
       <div class="right">
           <form action="" method="">


  <div class="formcontainer">
    <div class="side2">
      <h5 class="lets">Let's Start <img src="@/assets/img/side2.jpg" alt=""></h5>
      
    </div>
    <div class="down">
 <label class="sdo" for="name"><b>Name</b></label>
    <input type="text" name="name"  required>
    <label class="sdo" for="uname"><b>Email ID</b></label>
    <input type="text" name="uname"  required>

    <label for="psw" class="sdo"><b>Password</b></label>
    <input type="password"  name="psw" required>
        <div class="extra">
          <h6>Already a member?</h6>
         <router-link class="log" to="Login">Login</router-link>

          <!-- <a href="#">Login</a> -->
        </div>
        <router-link to="Question1"><button type="submit">Signup</button></router-link>
        <img class="or" src="@/assets/img/or.png" alt="">
        <span class="lastc">
          <h6 >Sign up with</h6>
          <img class="googlefont" src="@/assets/img/googlefont.png" alt="" > <img class="facebookfont" src="@/assets/img/facebookfont.png" alt="" >
          </span>
         
        


    </div>
   
    
  
  </div>


</form>
       </div>

   </div>
       <FooterAakash/>
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
  margin-left:280px;
}


form {border: 3px solid #f1f1f1;
        border-radius:20px;
            background-color: white;
            box-shadow: 3px 3px 3px 3px #888888;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius:10px;
  background-color:#E9ECF7
}
.sdo::after { 
  content: " *";
}

button {
   margin-top: 55px;
background-color: #3657B3;
    color: white;
    padding: 10px 30px 10px 30px;
    border-radius: 10px;
    font-family: poppins;
    font-weight: bold;
    border: none;
    width:221px;
}

button:hover {
  opacity: 0.8;
}

.extra{
  display: flex;
  margin-top:15px;
 
  width:200px;
  justify-content: space-between;
}
.side2{
  margin-left:5px;
  padding-left:15px;
}



.formcontainer {
  padding: 16px;
  border-radius:50px;
  width:500px;
  height:500px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
.side{
    margin-left: 494px;
    margin-top: -243px;
}

/* Change styles for span and cancel button on extra small screens */
.down{
  margin-top:24px;
}

.log{
  color:#3657b3;
  position: relative;
  top: -7px;
  left: -37px;
}
.or{
  position: relative;
    top: 4px;
    right: 8px;
    z-index: 1;
    background-color: white;
    border-radius: 8px;
    width: 15px;
    height: auto;
}

.lastc{
  
  margin-left:57px 
}


.googlefont{
  position:relative;
  top:18px;
}
.facebookfont{
   position:relative;
  top:18px;
  left:-11px;
}

.lastc h6{
  display: inline;
}





</style>



