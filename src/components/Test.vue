<template>
    <div id="testing">

        <div v-bind:style="{color: color_value.color}">
                {{name}} Testing
        </div>
        <br/>

        <br/>
        <input type="text" v-model="name" />

        <select v-model="color_value">
            <option v-for="(col, index) in colors" v-bind:key="index" v-bind:value="{color: col}">{{col}}</option>
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
      colors: ["red", "yellow" , "black", "orange"],
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

