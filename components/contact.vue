<template>
  <div class="contact">
    <h1>{{title}}</h1>

         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <a href="#" class="fa fa-facebook">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mylene &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pamintuan</a><br>
         <a href="#" class="fa fa-twitter">&nbsp;&nbsp;&nbsp;&nbsp;@Pam15</a><br>
         <a href="#" class="fa fa-instagram">&nbsp;&nbsp;&nbsp;&nbsp;mylene_david15</a>
    </div>
</template>
<script> 
export default {
  name: 'contact',
  data (){
    return{
      title:'Contact'
    }
  }
}
</script>
<style scoped>

 .fa-facebook {
  background: #3B5998;
  color: white;
  
}
.fa {
  padding: 30px ;
  font-size: 30px;
  width: 80px;
  text-align: center;
  text-decoration: none;
  margin: 10px 10px;
  border-radius: 500%;
  color:black;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
  color:black;
}
.fa-instagram {
  background: #125688;
  color: white;
  color:black;
}
div{
     background-color:rgb(244, 203, 221);
      height: 800px;
}
</style>
 

 