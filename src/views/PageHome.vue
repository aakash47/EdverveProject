<template>
    <div id="home">
        <HomeComponent />
    </div>
</template>

<script>
import HomeComponent from '../components/HomeComponent'
export default {
    components: {
        HomeComponent
    }
}
</script>

<style lang="scss" id="home">
    @import '../assets/sass/main';
    #home {
        height: 5684px;
    }
</style>