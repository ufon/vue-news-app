<template>
    <div class="spinner" />
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 50px auto;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: #000;
  &:after,
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 100%;
    box-shadow: 0 0 0 3px;
    animation: spinnerbubble 1.3s linear 0s infinite;
    margin: auto;
    width: 10px;
    height: 10px;
    opacity: 0;
  }
  &:before {
    animation: spinnerbubble 1.3s linear 2s infinite;
  }
}

@keyframes spinnerbubble {
  from {
    width: 10px;
    height: 10px;
    opacity: 0.8;
  }
  to {
    width: 50px;
    height: 50px;
    opacity: 0;
  }
}
</style>
