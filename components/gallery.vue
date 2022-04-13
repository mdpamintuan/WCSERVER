<template>
  <div class="gallery">
    <h1>{{title}}</h1>   
        <h2>This are my sample output of my works:</h2>
      <div class="alert alert-danger" role="alert">
        <div class="img-gallery">
          <div class="column">
          <img src="../assets/Screenshot (29).png" alt="img1" style="width:500px;height:300px;"><router-view/>
          <img src="../assets/Screenshot (30).png" alt="img2" style="width:500px;height:300px;"><router-view/>
          <img src="../assets/Screenshot (31).png" alt="img3" style="width:500px;height:300px;"><router-view/>
        
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data: function() {
    return {
      Image1: require('../assets/Screenshot (29).png'),
      Image2: require('../assets/Screenshot (30).png'),
      Image3: require('../assets/Screenshot (31).png'),
    
    }
  }
}
</script>
<style scoped>
 
</style>