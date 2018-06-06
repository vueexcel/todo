<template>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <router-link to="/">VUE</router-link>
                </div>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                     <a @click="login" class="button is-white">Login</a> 
                    </div>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    login: function() {
      this.$router.push("login");
    }
  }
};
</script>

<style>
</style>
