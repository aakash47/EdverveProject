<template>
    <div class="containerfooter" >
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <div class="content">
        <div class="left">
            <div class="logo">
                <img  class="size" src="@/assets/img/logo.png" alt="">
            </div>
            <div class="copyright">
                Copyright Edverve @ 2020
            </div>
            <div class="fonts">
                <i class="fab fa-facebook fa-lg"></i>
                <i class="fab fa-twitter fa-lg"></i>
                <i class="fab fa-linkedin-in fa-lg"></i>
            </div>
        </div> 
         <div class="cleft">
            <h2>Services</h2>
            <div class="cont">  <h5>Digital Learning Ecosystem</h5>
            <h5>Digital Learning Transformation</h5>
            <h5>Totara Learn Implementation</h5>
            <h5>OpenedX Implementation</h5>
            
            </div>
          
        </div> 
         <div class="cright">
            <h2>Company</h2>
            <div class="cont">  <h5>About</h5>
            <h5>Get in touch</h5>
            <h5>Case study</h5>
            <h5>Privacy Policy</h5>
            
            </div>
        </div> 
         <div class="right">
            
            <h2>Subscribe to Newsletter</h2>
            <input class="inputbox" type="text" placeholder="Email Address"><span class="tot"><i class="fas fa-paper-plane fs"></i></span>
        </div> 


        </div>
          
    </div>
</template>

<style scoped >
    .containerfooter {
        margin-top:200px;
        background-color: #333;
        height: 300px;
        }
   
    .content{
        display: flex;
        justify-content:space-around;
        color: #DDD;
        padding-top:50px;
    }
    .size{
        width: 30%;
        height: auto;
    }
    .fonts{
        display: flex;
        
        justify-content: space-between;
        margin-top:45px;
        height: 50px;
        width:120px
        
    }
    h5{
        font-weight:500;
    }
    .cont{
        padding-top:15px;
       
        display: flex;
        flex-direction:column;
        height: 150px;
        justify-content: space-between;
    }
    .inputbox{
        margin-top:15px;
        /* padding-top:25px ;
        padding-right: 25px; */
        text-align: center;
       height: 50px;
        width:190px;
    }
  
    .fs{
        font-size: 35px;
          position: relative;
     
         background-color:#565bb7;
         
            padding: 6px 14px 9px 8px;
       
        vertical-align: middle;
        
        
        
        
       
    }

    
</style>