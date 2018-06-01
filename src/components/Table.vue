<template>
    <b-table :data="users">
      <template slot-scope="props">
                <b-table-column field="id" label="ID" numeric>
                    # {{ props.row.id }}
                </b-table-column>

                <b-table-column field="name" label="Name">
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="email" label="EMail">
                    {{ props.row.email }}
                </b-table-column>

                <b-table-column field="date" label="Date" centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Action" centered>
                   <a @click.prevent="editUser(props.row)" class="button">
                    <span class="icon is-small">
                      <b-icon pack="fas" icon="user-edit"></b-icon>
                    </span>
                  </a>
                  <a @click.prevent="deleteUser(props.row)" class="button">
                  <span class="icon is-small">
                    <b-icon pack="fas" icon="trash"></b-icon>
                  </span>
                </a>
                </b-table-column>
      </template>
      <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>No users added yet!</p>
                    </div>
                </section>
            </template>
    </b-table>
</template>


<script>
export default {
  name: "Table",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {};
  },
  methods: {
    editUser: function(user){
      this.$emit('edituser', user);
    },
    deleteUser: function(user){
      this.$emit('deleteuser', user);
    }
  }
};
</script>
<style>
</style>

