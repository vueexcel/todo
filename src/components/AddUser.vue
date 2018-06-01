<template>
    <div class="row top-row">
        <div class="col-md-3 offset-md-9">
            <button type="button" @click="isComponentModalActive = true" class="button">Add User</button>
        </div>

        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <add-user-form v-bind="formProps" @adduser="adduser"></add-user-form>
        </b-modal>
    </div>
</template>

<script>
import AddUserForm from "./AddUserForm";
export default {
  name: "AddUser",
  components: { AddUserForm },
  methods: {
    adduser: function(user) {
      // eslint-disable-next-line
      console.log(user);
    }
  },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
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


