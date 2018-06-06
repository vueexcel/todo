<template>
 <div id="submitForm">
    <section>
         <b-field label="Username">
            <b-input required v-model="username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input required type="password"
                v-model="password"
                password-reveal>
            </b-input>
        </b-field>
        <button @click="loginClick" class="button is-full">Login</button>
    </section>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Form",
  watch: {
    user: function(val) {
      if (val.username) {
        this.$router.push("profile");
      }
    }
  },
  methods: {
    ...mapActions(["login"]),
    loginClick: function() {
      if (this.username.length > 0 && this.password.length > 0) {
        this.login({
          username: this.username,
          password: this.password
        });
      }
    }
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    }),
    username: {
      get: function() {
        return this.$store.state.login.username;
      },
      set: function(val) {
        this.$store.commit("updateUsername", val);
      }
    },
    password: {
      get: function() {
        return this.$store.state.login.password;
      },
      set: function(val) {
        this.$store.commit("updatePassword", val);
      }
    }
  }
};
</script>

<style>
</style>

