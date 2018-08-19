<template>
  <header>
    <img src="../assets/news-app.png" alt="logo" />
    <time>{{date.toLocaleString('ru', options)}}</time>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      date: new Date(),
      options: {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    };
  }
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
