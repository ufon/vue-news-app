<template>
  <header>
    <img src="../assets/logo.png" alt="logo" />
    <time>1234</time>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  height: 150px;
  background: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  img {
    width: 100%;
    max-width: 400px;
  }
  time {
    color: white;
  }
}
</style>
