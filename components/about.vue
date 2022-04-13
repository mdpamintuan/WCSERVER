<template>

  <div class="about">
    <h1>{{title}}</h1>
        <h2>Mylene Pamintuan<br>WD-201</h2>
        <p class="a">2nd Year College student from Holy Angel University currently taking a Bachelor of Science Major in Web Development
            <br>As an angelite I will serve as a role model in my community and our country just like a guardian angel I will protect and guide<br>
             the people I love in life and the people close to me. For example, simply throwing garbage if I see something he is doing wrong I will <br>
             teach him the right thing and I will guide him just like a guardian angel if I see anyone else who is having a hard time, I will take the <br>
             initiative to help him I will not let him suffer in whatever he does and I will not ask for anything in return for my good deeds done to my <br>
             neighbor. Also I will listen to the person who wants to talk or to share about his/her problem in life because sometimes  the most helpful thing<br>
              you can do for someone is just to listen to what they’re going through, without trying to interrupt or judge their situation. As an guardian <br>
              angel I will make people close to me feel how important they are and how they are special to me and if they are having a hard time I will not <br>
              pull them down but I will cheer them up and say be positive in life.
        </p>
    </div>
</template>
<script> 
export default {
  name: 'about',
  data (){
    return{
      title:'About'
    }
  }
}
</script>

<style scoped>
    h2 {
         text-align:center;
        font-family: fantasy;
        padding: 10rem 0.5rem;
        color:rgb(82, 110, 134)
        
  }
    p.a {
        text-align:center;
        background-color:rgb(221, 236, 244);
        height: 350px;
         padding: 5rem 0.5rem;
    }
    div {
        background-color:rgb(244, 203, 221);
        height: 450px;
        text-align:center;
 }  

</style>