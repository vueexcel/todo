<template>
    <div>
            <AddUser :edituser="edituserdata" @adduser="adduser" @useredited="useredited" />
            <Table @deleteuser="deleteuser" @edituser="edituser" :users="users" />
    </div>
</template>

<script>
import Table from "./../components/Table.vue";
import AddUser from "./../components/AddUser.vue";

export default {
  name: "Body",
  components: {
    Table,
    AddUser
  },
  data: function() {
    return {
      users: [],
      edituserdata: {}
    };
  },
  methods: {
    useredited: function(user) {
      // eslint-disable-next-line
      console.log(user);
      this.users.splice(user.id - 1, 1, user);
      this.edituserdata = false;
    },
    edituser: function(user) {
        this.edituserdata = user;
    },
    adduser: function(user) {
      user.id = this.users.length + 1;
      this.users.push(user);
    },
    deleteuser: function(user) {
      this.users.splice(user.id - 1);
    }
  }
};
</script>

<style>
</style>

