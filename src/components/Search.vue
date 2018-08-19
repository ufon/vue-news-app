<template>
    <div class="container">
      <label class="search" :class="{ 'search--active': isFocused }" htmlFor="search">
        <input
          @input="callbackWrapper"
          @focus="onFocus"
          @blur="onBlur"
          :value="value"

          placeholder="Поиск..."
          id="search"
          type="text"
        />
      </label>
    </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Search",
  data() {
    return {
      isFocused: false
    };
  },
  props: {
    callback: Function,
    timeout: Number,
    value: String
  },
  methods: {
    callbackWrapper: _.debounce(function(e) {
      this.callback(e.target.value);
    }, 500),

    onFocus: function() {
      this.isFocused = true;
      console.log("focused");
    },
    onBlur: function() {
      this.isFocused = false;
      console.log("blur");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  text-align: center;
  padding-top: 25px;
  margin-bottom: 60px;
}

.search {
  display: inline-block;
  position: relative;
  height: 35px;
  width: 35px;
  box-sizing: border-box;
  margin: 0px 8px 7px 0px;
  padding: 0 9px;
  border: 3px solid #000;
  transition: all 200ms ease;
  border-radius: 25px;
  cursor: text;

  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 20px;
    right: -5px;
    top: 21px;
    background: #000;
    border-radius: 3px;
    transform: rotate(-45deg);
    transition: all 200ms ease;
  }

  &--active,
  &:hover {
    width: 200px;
    margin-right: 0px;
    border-radius: 0px;

    &:after {
      height: 0px;
    }

    input {
      visibility: visible !important;
      opacity: 1 !important;
    }
  }

  input {
    visibility: hidden;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    font-size: 14pt;
    color: inherit;
    background: transparent;
    outline-width: 0px;
    font-family: Avenir Next Cyr;
    font-weight: 500;
    transition: all 200ms ease-in-out;

    &:focus {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
