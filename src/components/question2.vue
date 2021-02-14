<template>
    <div id="home">

   <div class="container">
       <div class="left">
           <h1 class="bc">Let's </h1>
           <h1 class="bc">Personalize</h1>
           <h3 class="sc">Your </h3>
           <h3 class="sc"> experience</h3>
            <img class="side" src="@/assets/img/level3.jpg" alt="">
       </div>
       <div class="right">
           <form action="" method="">


  <div class="formcontainer">
      <div>

          <h5 class="lets">One More Qustion?<img src="@/assets/img/side2.jpg" alt=""></h5>
          
      </div>
    
    <div class="qustn">
        <h4 >Are you student or professional?</h4>
    </div>
    <div class="set1">
        <div class="student">
              <router-link to="Interest">
            <button class="btnq"><h5 class="stud">Student</h5></button>
            <span class="inner-circle"></span>
            <img class="studentpic" src="@/assets/img/20.png" alt="">
            </router-link>
        </div>
      
        <div class="student">
              <router-link to="Interest">
            <button class="btnq"><h5 class="stud">Professional</h5></button>
            <span class="inner-circle"></span>
            <img class="studentpic" src="@/assets/img/50.png" alt="">
            </router-link>
        </div>
        
        

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
  margin-left:280px;
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
    padding-left: 38px;
}
.set1{
    display:flex;
    margin-left: 35px;
    justify-content: space-around;
    margin-top:50px;
    
}
/* Change styles for span and cancel button on extra small screens */
.side{
    margin-left: 494px;
    margin-top: -243px;
}

.btnq{
    width:158px;
    height:211px;
     background-color:white;
    border-radius:5px;
    color:#010148;
    border: 1px solid #010148;
    z-index: 0;
    cursor:pointer;
}
.btnq:focus{
    background-color:#3657b3;
    border:none;
    /* outline:none; */
}

.studentpic{
    position:relative;
    top: 49px;
    left: -121px
}


.stud {
    line-height:18px;
     transform: translate(0, 451%);
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
    top: -90px;
    left: -19px;
  
}



</style>



