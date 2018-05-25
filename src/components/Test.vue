<template>
    <div id="testing">

        <p>Type Something..</p> 
        <i>Press enter</i>
        <br/>
        <form v-on:submit.prevent>
            <input v-on:keypress="submit" type="text" v-model="name" />
        </form>

        <ul>
            <li v-for="(item, index) in data" v-bind:key="index">{{item}}</li>
        </ul>

    </div> 
</template>


<script>
export default {
  name: "Test",
  data: function() {
    return {
      name: "",
      data: []
    };
  },
  methods: {
    submit: function(e) {
      if (e.keyCode === 13) {
        this.data.push(this.name);
        this.name = "";
      }
    }
  }
};
</script>
<style>
#testing li{
    border: 1px solid;
    padding: 5px;
}
</style>

