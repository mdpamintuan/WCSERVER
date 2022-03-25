<!--
Author: Pamintuan Mylene D.
File Name: App.vue 
Description: The main component of the 3 vue files
-->
<template>
  <div id="app">
    <div class="alert alert-warning" role="alert">
      <img src="./assets/icon.jpg" height="10%" width="10%">
      <div class="container">
 
      <h1>{{ msg }}</h1>
    </div>
    <profile></profile>
    <education></education>
    <skills></skills>

    
   </div> 
  </div>
</template>

<script>

//Import the newly created component
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components:{
    Profile,
    Education,
    Skills
  },
  data () {
    return {
      msg: 'The Main Component'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>