<template>
  <div id="app">
    <Header/>
    <Content>
        <Body />
    </Content>
    <Footer/>
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import Content from "./layout/Content.vue";
import Body from "./layout/Body.vue";

export default {
  name: "app",
  components: {
    Header,
    Content,
    Body,
    Footer
  }
};
</script>

<style>
</style>
