<template>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Email</th>
        <th scope="col">Name</th>
        <th scope="col">DOB</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) in users" v-bind:key="index">
            <th scope="row">{{index}}</th>
            <td>{{item.email}}</td>
            <td>{{item.name}}</td>
            <td>{{item.dob}}</td>
        </tr>
    </tbody>
    </table>
</template>


<script>
export default {
  name: "Table",
  data: function() {
    return {
        users: []
    }
  }
};
</script>
<style>
</style>

