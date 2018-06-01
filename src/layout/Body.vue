<template>
    <div>
            <AddUser @adduser="adduser" />
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
      users: []
    };
  },
  methods: {
    adduser: function(user) {
      user.id = this.users.length + 1;
      this.users.push(user);
    },
    deleteuser: function(user){
        this.users.splice(user.id - 1);
    }
  }
};
</script>

<style>
</style>

