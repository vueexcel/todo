<template>
    <div class="row top-row">
        <div class="col-md-3 offset-md-9">
            <button type="button" @click="openPopup" class="button">Add User</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "AddUser",
  methods: {
    openPopup: function() {}
  }
};
</script>

<style>
.top-row {
  padding: 10px;
}
</style>


