<template>
    <div id="home">

   <div class="container">
       <div class="left">
       <img class="loginimage" src="@/assets/img/login.jpg" alt="">
       
       </div>
       
       


           <form action="" method="">

           
  <div class="formcontainer">
    <div class="side2" >
      <h3 class="log">Login</h3><span><img src="@/assets/img/side2.jpg" alt=""></span>
    </div>
      <div class="bottom">
    <label class="sdo" for="uname"><b>Email ID</b></label>
    <input type="text" name="uname"  required>

    <label for="psw" class="sdo"><b>Password</b></label>
    <input type="password"  name="psw" required>
        <div class="extra">
            Not a member yet?
             <router-link to="Signup" class="signup">Signup</router-link>


            <!-- <a class="signup" href="">Signup</a> -->
            <label class="check">
            <input  type="checkbox" checked="checked" name="remember">Remember me
            </label>
        </div>
        <div class="last">
    <button type="submit">Login</button>
    <img class="or" src="@/assets/img/or.png" alt="">
    <span class="lastc">
      <h6>Login with</h6>
       <img class="googlefont" src="@/assets/img/googlefont.png" alt="" > <img class="facebookfont" src="@/assets/img/facebookfont.png" alt="" >
    </span>
    
    </div>
    </div>
  </div>


</form>
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
.log{
    margin-left: 320px;
    display: inline;
}

.signup{
    
    text-decoration: none;
     color: #3657B3;
     margin-right:164px;
    
}

form {border: 3px solid #f1f1f1;
        border-radius:20px;
            background-color: white;
             box-shadow: 3px 3px 3px 3px #888888; ;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius:10px;
  background-color:#E9ECF7;
}
.sdo::after { 
  content: " *";
  
}
.extra{
    display: flex;
    justify-content: space-between;
    margin-top:22px;
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

.loginimage{
  margin-bottom:131px;
}





.formcontainer {
  padding: 16px;
  border-radius:50px;
  width:500px;
  height:400px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
.side2{
  margin-left:30px;
}



.side{
  padding-left:120px
}



.bottom{
  margin-top:34px;
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


h6{
  display:inline;
  
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




</style>



