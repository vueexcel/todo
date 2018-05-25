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
  data: function() {
    return {
      name: "manish1"
    };
  },
  // computed is not the way for format this. it goes in infite loop, computed
  // is to set other properties in data, not itself
  //   computed: {
  //       date: {
  //           set: function(newvalue) {
  //               console.log(newvalue);
  //               this.date = new Date(newvalue).getTime();
  //           }
  //       }
  //   },
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

