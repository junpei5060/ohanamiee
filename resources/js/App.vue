<template>
  <div>
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script>

</script>

<style scoped>
.container{
    background-color: #FFF;
    margin: 0 auto;
    padding: 0;
    overflow:hidden;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    height: auto;
    
}

router-link{
    text-decoration: none;
}

</style>