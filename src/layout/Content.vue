<template>    
  <div>
  
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome!</h1>
          <p class="lead">This is just a demo app to try out basic features of vue.js and get a better understanding</p>
          <p>You can add/edit data and sort the table, etc</p>
        </div>
      </div>
    </section>

    <section class="section">
       <div class="container">
          <slot />
       </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
</style>

