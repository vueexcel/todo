<template>
 <div id="submitForm">
    <p>Type Something..</p> 
        <i>Press enter</i>
        <br/>
        <form v-on:submit.prevent>
            <input v-on:keypress="submit" type="text" v-model="name" />
        </form>
</div>
</template>

<script>

export default {
  name: "Form",
  data: function() {
    return {
      name: "",
      editIndex: false
    };
  },
  methods: {
    submit: function(e) {
      if (e.keyCode === 13) {
          this.$emit("submit-item", this.name)
          this.name = "";
      }
    }
  }
};
</script>

<style>
</style>

