<template>
    <div id="testing">

        <div :class="{red: isRed}">
                {{name}} Testing
        </div>
        <br/>
        <br/>

        {{date}}


        <br/>
        <input type="text" v-model="name" />

        <button v-on:click="clear">Clear</button>

        <button @click="makeCapital">Caps</button>

        <input :checked="isRed" v-model="isRed" type="checkbox" @click="red" /> Red
    </div> 
</template>


<script>
export default {
  name: "Test",
  data: function() {
    return {
      name: "manish1",
      date: false,
      isRed: false,
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
    this.date =
      new Date().getFullYear() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getDay();
  },
  mounted: function() {
    this.date =
      new Date().getFullYear() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getDay();
  },
  methods: {
    clear: function() {
      this.name = "";
    },
    makeCapital: function() {
      this.name = this.name.toUpperCase();
    },
    red: function() {
        // eslint-disable-next-line
        console.log(this.isRed)
    //   this.isRed = this.redbox === "yes";
    }
  }
};
</script>
<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>

