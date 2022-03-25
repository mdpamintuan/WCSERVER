<!--
Author: Pamintuan Mylene D.
File Name: Profile.vue 
Description: Displays my Personal Information
-->
<template>
  <div id="profile">
    <div class="alert alert-primary" role="alert">
      <h1>{{ msg6 }}</h1>
      <p>Name: Mylene D. Pamintuan</p>
      <p>Address: Gloria Ville Manibaug Paralaya Porac Pampanga</p>
      <p>Email: mylene.pamintuan23@gmail.com</p>
      <p>Phone Number: 09072924807</p>

    </div>
  </div>

</template>

<script>
export default {
  name: 'profile',
  data () {
    return{
      msg6: 'Personal Information'
    }
  }
}
</script>