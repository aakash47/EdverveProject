<template>
    <div id="home">

   <div class="container">
       <div class="left">
           <h1 class="bc">Let's </h1>
           <h1 class="bc">Personalize</h1>
           <h3 class="sc">Your experience</h3>
           <h3 class="sc"> experience</h3>
            <img class="side" src="@/assets/img/level2.jpg" alt="">
       </div>
       <div class="right">
           <form action="" method="">


  <div class="formcontainer">
    <h5 class="lets">There is one Qustion? <img src="@/assets/img/side2.jpg" alt=""></h5>
    <div class="qustn">
        <h4>How old are You?</h4>
    </div>
    <div class="set1">
        <router-link to="Question2"> <button class="btnq"><h4 class="bld">0-20</h4><p>years</p>
        </button></router-link>
       
        <span class="inner-circle"></span>
        <img class="tnty" src="@/assets/img/20.png" alt="">
        
       
        <!-- <router-link to="Answer1"><img src="@/assets/img/20.jpg" alt="photo"></router-link> -->
        <router-link to="Question2"><button class="btnq"><h4 class="bld">20-50</h4><p>years</p>
        </button></router-link>
        
        <span class="inner-circle"></span>
        <img class="tnty" src="@/assets/img/50.png" alt="">



          
        

    </div>
    <div class="set2">
        <!-- <router-link to="Question2"> <img src="@/assets/img/50plus.jpg" alt="photo"></router-link> -->
        <router-link to="Question2"> <button class="btnq"><h4 class="bld1"> Above 50</h4><p>years</p>
        </button></router-link>
      
        <span class="inner-circle"></span>
        <img class="tnty" src="@/assets/img/50plus.png" alt="">
        
        

    </div>
  
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
  margin-left:257px;
}


form {border: 3px solid #f1f1f1;
        border-radius:20px;
            background-color: white;
            box-shadow: 3px 3px 3px 3px #888888;}



.formcontainer {
  padding: 16px;
  border-radius:50px;
  width:500px;
  height:500px;
}

.qustn{
    padding-top:78px;
}
.set1{
    display:flex;
 
    justify-content: space-around;
}
/* Change styles for span and cancel button on extra small screens */
.set2{
    display:flex;

    justify-content: space-around;
    width:238px;
    margin-top:15px;
}

.side{
    margin-left: 494px;
    margin-top: -243px;
}

.btnq{
    margin-top:31px;
    width:158px;
    height:105px;
    background-color:white;
    border-radius:5px;
    color:#010148;
    text-align: center;
    border: 1px solid #010148;
    z-index: 0;
    cursor:pointer;
    /* background-image: url("/assets/img/20.jpg");*/
} 
.btnq:focus{
    background-color:#3657b3;
    border:none;
    /* outline:none; */
}




.bld{
    font-weight:1900;
    font-size:1rem;
    padding-top:-7px;
    

}
.bld1{
    font-weight:1900;
    font-size:1rem;
    padding-top:-7px;
    padding-left:35px;

}

.tnty{
    position:relative;
      top: 34px;
    left: -175px;
    cursor: pointer;
    pointer-events: none;
}

.inner-circle{
      display: inline-block;
    width: 11px;
    height: 10px;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    border-color: #010148;
    position: relative;
    top: 35px;
    left: -37px;
  
}














</style>



