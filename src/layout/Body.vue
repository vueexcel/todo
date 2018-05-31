<template>
    <div>
            <AddUser />
            <Table />
    </div>
</template>

<script>
import Table from "./../components/Table.vue"
import AddUser from "./../components/AddUser.vue"

export default {
  name : "Body",
  components: {
      Table,
      AddUser
  }
}
</script>

<style>

</style>

