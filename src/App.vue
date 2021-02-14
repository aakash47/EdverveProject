<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
      <!-- <login1/> -->
      <!-- <signup/> -->
      <!-- <question1/> -->
      <!-- <question2/> -->
      <!-- <interest/> -->
   
    <router-view/>
    <FooterAakash/>
  </div>
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent'
// import login1 from './components/login1'
// import signup from './components/signup'
// import question1 from './components/question1'
// import question2 from './components/question2'
// import interest from './components/interest'

import FooterAakash from './components/FooterAakash.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // login1,
    // signup,
    // question1,
      // question2,
      // interest,
    FooterAakash,
  
   
  }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // max-width: 1366px;
}
body {
  font-family: 'Poppins', sans-serif;
  position: relative;
}
</style>
