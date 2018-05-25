<template>
    <div id="testing">
        {{name}} Testing
        <br/>
        <br/>

        <input type="text" v-model="name" />

        <button v-on:click="clear">Clear</button>

        <button @click="makeCapital">Caps</button>
    </div>
</template>


<script>
export default {
  name: "Test",
  data: () => {
    return {
      name: "manish1"
    };
  },
  created: function() {
    console.log("created");
  },
  mounted: function() {
    console.log("mounted");
  },
  updated: function() {
    console.log("updated");
  },
  destroyed: function() {
    console.log("destroyed");
  },
  methods: {
    clear: function() {
      this.name = "";
    },
    makeCapital: function() {
      this.name = this.name.toUpperCase();
    }
  }
};
</script>
<style>
</style>

