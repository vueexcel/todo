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
        <button class="button is-full">Login</button>
    </section>
</div>
</template>

<script>
export default {
  name: "Form",
  data: function() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style>
</style>

