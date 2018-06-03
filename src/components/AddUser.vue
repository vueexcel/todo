<template>
    <div class="row top-row">
        <div class="col-md-3 offset-md-9">
            <button type="button" @click="openModel" class="button">Add User</button>
        </div>

        <b-modal :onCancel="modelClosed" :active.sync="isComponentModalActive" has-modal-card>
            <add-user-form v-bind="formProps" @useredited="useredited" @adduser="adduser"></add-user-form>
        </b-modal>
    </div>
</template>

<script>
import AddUserForm from "./AddUserForm";
export default {
  name: "AddUser",
  components: { AddUserForm },
  props: ["edituser"],
  methods: {
    useredited: function(user) {
      this.$emit("useredited", user);
    },
    adduser: function(user) {
      this.$emit("adduser", user);
    },
    openModel: function() {
      this.isComponentModalActive = true;
      // just random values, which will help with testing. 
      // don't need to full form everytime
      this.formProps = {
          id: -1,
          email: Math.random(0,100) * 1000 + "@gmail.com",
          name: Math.random(0,100) * 1000,
          password: Math.random(0,100) * 1000,
          date: new Date()
        };
    },
    modelClosed: function() {
      // eslint-disable-next-line
      console.log("modelc closed");
      this.currentUser = false;
    }
  },
  updated: function() {
    // eslint-disable-next-line
    console.log("updated");
  },
  watch: {
    edituser: function(newValue, oldValue) {
      // eslint-disable-next-line
      console.log(newValue, oldValue);
      if (newValue) {
        this.formProps = {
          id: newValue.id,
          email: newValue.email,
          name: newValue.name,
          password: newValue.password,
          date: new Date(newValue.date)
        };
        this.isComponentModalActive = true;
      }
    }
  },
  data() {
    return {
      currentUser: this.edituser,
      isComponentModalActive: false,
      formProps: {
        id: -1,
        email: "",
        password: "",
        name: "",
        date: null
      }
    };
  }
};
</script>

<style>
.top-row {
  padding: 10px;
}
</style>


