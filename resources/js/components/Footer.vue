<template>
  <div class="footer primary">
      <p>Copyright © 2020 Informatičko-tehnička udruga SWITCH. Sva prava pridržana.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.footer{
    display: flex;           
    flex-direction: column;  
    justify-content: center; 
    align-items: center;
    height: 50px;
    width: 100vw;
}

.footer p{ 
    color: white;
}

@media only screen and (max-width: 960px) {
  .footer p{ 
    text-align: center;
    font-size: 0.7em;
}
}

</style>