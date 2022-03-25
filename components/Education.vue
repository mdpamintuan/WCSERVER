<!--
Author: Pamintuan Mylene D.
File Name: Education.vue 
Description: Displays my Background Education
-->
<template>
  <div id="education">
    <div class="alert alert-success" role="alert">
      <h1>{{ msg6 }}</h1>
      <p>Elementary: Manibaug Elementary School</p>
      <p>High School: Angeles City National Trade School</p>
      <p>College: Holy Angel University</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'education',
  data () {
    return{
      msg6: 'Background Education'
    }
  }
}
</script>