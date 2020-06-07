<template>
    <div class="switch-parallax">
        <div class="parallax-text">
            Code for the future
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.switch-parallax {
  background-image: url("/code_for_the_future.png");
  min-height: 550px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 2em;
}

.parallax-text{
    display: none;
}

@media only screen and (max-width: 960px) {
    .switch-parallax {
  background-image: url("/code_for_the_future_mobile.png");
  min-height: 550px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 2em;
  text-align: center;
  display: grid;
  place-items: center;
}

  .parallax-text{
    display: block;
    color: white;
    font-size: 4em;
    text-transform: uppercase;
    
}
}
</style>