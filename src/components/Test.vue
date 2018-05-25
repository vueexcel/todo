<template>
    <div id="testing">
        {{name}} Testing
        <br/>
        <br/>
        
        <input type="text" v-model="name" />
    </div>
</template>


<script>
export default {
  name: "Test",
  data : () => {
      return {
          name: "manish1"
      }
  }
};
</script>
<style>
</style>

