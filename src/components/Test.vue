<template>
    <div id="testing">
        {{name}} Testing
        <br/>
        <br/>

        {{date}}
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
      name: "manish1",
      date : false
    };
  },
  created: function() {
    console.log("created");
    this.date = new Date();
  },
  mounted: function() {
    console.log("mounted");
    this.date = new Date();
  },
  updated: function() {
    console.log("updated");
    // this.message = new Date();
  },
  destroyed: function() {
    console.log("destroyed");
    this.message = new Date();
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

