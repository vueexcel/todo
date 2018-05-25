<template>
    <div id="testing">

        <div v-bind:style="{color: color_value.color}">
                {{name}} Testing
        </div>
        <br/>

        <br/>
        <input type="text" v-model="name" />

        <select v-model="color_value">
            <option v-bind:value="{color: 'red'}">red</option>
            <option v-bind:value="{color: 'yellow'}">yellow</option>
            <option v-bind:value="{color: 'black'}">black</option>
            <option v-bind:value="{color: 'orange'}">orange</option>
        </select>

    </div> 
</template>


<script>
export default {
  name: "Test",
  data: function() {
    return {
      name: "manish1",
      date: false,
      color_value: {
          color: "black"
      },
    };
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

