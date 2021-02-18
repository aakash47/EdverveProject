<template>
<div class="container">
         <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <div class="topsection">
        <span class="first">
        <img class="house" src="@/assets/img/house.png" alt="">
        <i class="arrow right"></i>
        </span>
        <span>
            <span class="second">    <h6 class="course">courses</h6>
         <i class="arrow right"></i></span>
    
         <h6 class="course">Edverve Compliance</h6>
         <i class="arrow right"></i>
         <h6 class="course">Social and  Digital Media and the Workshop</h6>
         
         </span>
    </div>
    <div class="middle">
        <div class="leftsection">
            <div class="lefttop">
                <div class="heading">
                <p >SOCIAL AND DIGITAL MEDIA AND WORK  </p>
                <p >PLACE</p>
                <button class="video"><i class="far fa-caret-square-left"></i></button>
                </div>
                <div class="content1">
                    <p><i class="fas fa-caret-right"></i> Participants</p>
                    <p><i class="fas fa-medal"></i>  Badges</p>
                    <p><i class="fas fa-dot-circle"></i> Grades</p>
                    <p><i class="fas fa-caret-right"></i> General</p>
                    <p><i class="fas fa-caret-right"></i> Topic 1</p>
                    <p><i class="fas fa-caret-right"></i> Topic 2</p>
                    <p><i class="fas fa-caret-right"></i> Topic 3</p>
                    <p><i class="fas fa-caret-right"></i> Topic 4</p>
                
                </div>
                
            </div>
            <div class="leftbottom">
               <div class="heading">
                <p >ADMINESTRATION  </p>
                <button class="video badmin"><i class="far fa-caret-square-left"></i></button>
                </div>
                <div class="content1">
                    <p> <i class="fas fa-caret-down"></i>Course Adminestration</p>
                    <div class="belowadmin">
                    <p><i class="fas fa-dot-circle"></i> Grades</p>
                    <p><i class="fas fa-caret-right"></i> Question Bank</p>
                    <p> <i class="fas fa-caret-down"></i> Switch Roles to</p></div>
                    <p class="bbadmin"><i class="fas fa-undo"></i> Return to my normal role</p>
                   
                </div>
            </div>
        </div>
        <div class="centersection">
            <div class="top1">
                <p><i class="fas fa-bullhorn"></i> Announcements
                <span class="arrow"><i class="fas fa-chevron-down"></i></span>
                </p>
                <div class="vl"></div>
                <div class="cs1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore consequatur magnam saepe ipsam impedit aperiam tempora, corrupti voluptatum eaque.</p>

                </div>
                 <div class="cs1 cs2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore consequatur magnam saepe ipsam impedit aperiam tempora, corrupti voluptatum eaquehhg.</p>

                </div>
                
               <div class="hl"><hr></div>
               <br>
               <span class="hr1"><hr></span>
            </div>
            <div class="centerbottom">
                <div class="top2">
                    <p><i class="fas fa-th"></i> Content</p>
                </div>
                <div class="topics">
                    <p>Topic 1  <span class="arrowtopice"><i class="fas fa-chevron-down"></i></span></p>
                </div>
                    <div class="topics">
                    <p>Topic 2  <span class="arrowtopic"><i class="fas fa-chevron-down"></i></span></p>
                </div>    
                <div class="topics">
                    <p>Topic 3  <span class="arrowtopic"><i class="fas fa-chevron-down"></i></span></p>
                </div>
                    <div class="topics">
                    <p>Topic 4  <span class="arrowtopic"><i class="fas fa-chevron-down"></i></span></p>
                </div>
            </div>
        </div>
    <div class="rightsections">
        <div>
            <div class="heading rsh">
                <p >SEARCH FORUMS  </p>
                <button class="video badmin"><i class="far fa-caret-square-left"></i></button>
            </div>
            <input placeholder="search" class="rti" type="text">
            <p class="ads rs2p">Advanced search</p>
        </div>
        <div class="rs2">
           <div class="heading rsh">
                <p >LATEST ANNOUNCEMENTS  </p>
                <button class="video badmin"><i class="far fa-caret-square-left"></i></button>
            </div>
            <p class="rs2p">no Announcements have been met yet</p>
        </div>
        <div class="rs3">
                   <div class="heading rsh">
                <p >UPCOMING EVENTS  </p>
                <button class="video badmin"><i class="far fa-caret-square-left"></i></button>
            </div>
            <p class="rs2p">There are no upcoming events</p>
            <p class="rs2p">Go to calendar</p>
              <p class="rs2p">New event</p>
        </div>
          <div class="rs4">
                   <div class="heading rsh">
                <p >RECENT ACTIVITY  </p>
                <button class="video badmin"><i class="far fa-caret-square-left"></i></button>
            </div>
            <p class="rs2p">There are no upcoming events</p>
            <p class="rs2p">Go to calendar</p>
              <p class="rs2p">New event</p>
        </div>
    </div>
    
</div>
    </div>

    

</template>




<style scoped>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

.topsection{
    margin-top:33px;
    margin-left:31px;
   width:600px;
   height:31px; 
    border:1px solid #E9ECF7;
}
.house{
    position:relative;
    top: -3px;
    left: 7px;
    
}
.arrow {
  border: solid #E9ECF7;

  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 9px;
  margin-top:3px;
  margin-left:7px; 
  ;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.topsection h6{
    display: inline;
   position: relative;
    top: -5px;
    left: 11px;
    font-size:12px;
    color:#616185
}

.middle{
    margin-top:37px;
    
    width:100%;
    display:flex;
    justify-content:space-between;
}

.leftsection{
    margin-left:16px;
    display: flex;
    flex-direction:column;
}
.lefttop{
    width:314px;
    height:60px;
    
    
}
.video{
    position:relative;
   top: -32px;
    left: 272px;
    background-color:#010148;
    border:none;
    
}

.heading{
    background-color:#010148; 
    width:313px;
   color:azure;
    font-size:12px;
    border-radius:10px;
    padding:10px;
    height:60px;
    
}
.far{
    color:white;
    cursor:pointer;
}
.content1{
    margin-left:22px;
    color:#010148;
    font-size:13px;
    margin-top:10px;
}
.leftbottom{
    margin-top:240px;
    }
.badmin{
    margin-top:16px;
}
.belowadmin{
    margin-left:13px;
}
.bbadmin{
    margin-left:26px;
}
.centersection{
    /* background-color:red; */
    width:667px;
    margin-right:180px;
    margin-top:14px;
    color:#010148;
    height:100%;
    margin-left:14px;
}
.arrow{
    position: relative;
    right:-473px;
   
    border:none
}
.vl {
  border-left: 2px solid #010148;
  height: 138px;
  margin-left:11px;
}
.cs1{
    margin-left:60px;
    margin-bottom:162px;
    position:relative;
    top:-102px;
    border:1px solid #010148;
    font-size:12px;
    width:568px;
    border-radius:10px;
    height:53px;
    padding:5px;
}
.cs2{
    margin-top:-131px;
}
.hl hr{

      width: 51px;
    margin-top: -377px;
    margin-left: 11px;
    background-color:#010148;
    color: #010148;
    border-color:#010148 ;
}
.hr1 hr{
 width:49px;
 margin-top:50px;
 margin-left:11px;
 border-color:#010148 ;
}
.centerbottom{
    margin-top:99px;
}
.topics{
    margin-left:23px;
    border-bottom:1px solid #333333;
    width:642px;
    color:#333333;
    margin-top:10px;
}
.arrowtopic{
    position: relative;
    right:-570px;  
    border:none;
}
.arrowtopice{
    position: relative;
    right:-574px;  
    border:none;
}
.rightsections{
 display: flex;
 /* justify-content: space-between; */
     margin-left: -158px;
    padding-right: -7px;
    flex-direction: column;
    margin-right:9px ;
    }
.rti{
        margin-left: 52px;
    margin-top: 19px;
    border-radius:10px;
    background-color:#E9ECF7;
    height:21px;
    border:#E9ECF7;
    padding-left:18px;
}
.ads{
            margin-left: 52px;
    margin-top: 19px;
}
.rs2{
    margin-bottom:238px;
    margin-top:24px;
}
.rs2p{
    margin-left:21px;
    font-size:14px;
    color:#010148;
    margin-top:9px; 
}
.rs3{
    margin-top:-177px;
}
.rs4{
    margin-top:46px;
}
</style>