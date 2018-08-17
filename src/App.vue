<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search">About</router-link>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

a {
  color: rgba(0, 0, 0, 0.84);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px dashed #ccc;
  transition: border-bottom 300ms ease-in-out;
  &:hover {
    border-bottom: 1px dashed rgb(53, 53, 53);
  }
}
</style>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Footer,
    Header
  }
};
</script>
