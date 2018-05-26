<template>
    <div id="testing">

        
        <Form v-on:submit-item="submit" />
        <ul>
            <li v-for="(item, index) in data" v-bind:key="index">
                <span>{{item}}</span>

                <a href="#" v-on:click.prevent="deleteItem(index)" >Delete</a>
                <a href="#" v-on:click.prevent="editItem(index)" >Edit</a>
            </li>
        </ul>

    </div> 
</template>


<script>
import Vue from "vue";
import Form from "./Form";

export default {
  name: "List",
  components: {
    Form
  },
  data: function() {
    return {
      data: []
    };
  },
  methods: {
    submit: function(name) {
        this.data.push(name);
    },
    edit: function() {
      Vue.set(this.data, this.editIndex, this.name);
      this.name = "";
      this.editIndex = -1;
    },
    deleteItem: function(index) {
      this.data.splice(index, 1);
    },
    editItem: function(index) {
      this.editIndex = index;
      this.name = this.data[index];
    }
  }
};
</script>
<style>
#testing li {
  border: 1px solid;
  padding: 5px;
}
#testing li a {
  font-size: 10px;
  float: right;
  padding: 5px;
}
</style>

