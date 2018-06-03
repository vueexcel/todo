<template>
    <form @submit.prevent="submitForm">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                v-model="form_email"
                                placeholder="Your email"
                                required
                                >
                            </b-input>
                        </b-field>

                        <b-field label="Name">
                            <b-input
                                type="name"
                                v-model="form_name"
                                placeholder="Your name"
                                required
                                >
                            </b-input>
                        </b-field>

                        <b-field label="Date of birth">
                            <b-datepicker
                                required
                                v-model="dob"
                                placeholder="dob.."
                                icon="calendar-today">
                            </b-datepicker>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                required
                                type="password"
                                v-model="form_password"
                                placeholder="Your password"
                                >
                            </b-input>
                        </b-field>

                        <b-field label="Confirm Password" 
                            :type="password_mismatch_message_class" 
                            :message="password_mismatch_message">
                            <b-input
                                required
                                type="password"
                                v-model="conf_password"
                                password-reveal
                                placeholder="Confirm password"
                                >
                            </b-input>
                        </b-field>
                        <b-field :type="terms_message_class" 
                            :message="terms_message">
                            <b-checkbox required v-model="terms" >Accept Terms & Conditions</b-checkbox>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button type="submit" class="button is-primary">Login</button>
                    </footer>
                </div>
            </form>
</template>

<script>
export default {
  name: "AddUserForm",
  props: ["id", "email", "name", "password", "date"],
  data: function() {
    return {
      form_email: this.email,
      form_name: this.name,
      form_password: this.password,
      terms: false,
      conf_password: this.password,
      password_mismatch_message: "",
      password_mismatch_message_class: "",
      terms_message: "",
      terms_message_class: "",
      dob: this.date
    };
  },
  updated: function() {
    // eslint-disable-next-line
    console.log("updated add user form");
  },
  methods: {
    submitForm: function() {
      if (this.form_password !== this.conf_password) {
        this.password_mismatch_message = "Both passwords should match";
        this.password_mismatch_message_class = "is-danger";
        return;
      } else {
        this.password_mismatch_message = "";
        this.password_mismatch_message_class = "";
      }
      if (!this.terms) {
        this.terms_message = "Please accept terms";
        this.terms_message_class = "is-danger";
        return;
      } else {
        this.terms_message = "";
        this.terms_message_class = "";
      }
      // eslint-disable-next-line
      console.log(this.id, "form id");
      if (this.id === -1) {
        // eslint-disable-next-line
        console.log("adduser called");
        this.$emit("adduser", {
          email: this.form_email,
          name: this.form_name,
          password: this.form_password,
          date: this.dob
        });
      } else {
        // eslint-disable-next-line
        console.log("edit called");
        this.$emit("useredited", {
          id: this.id,
          email: this.form_email,
          name: this.form_name,
          password: this.form_password,
          date: this.dob
        });
      }
      this.$parent.close();
    }
  }
};
</script>

<style>
</style>
