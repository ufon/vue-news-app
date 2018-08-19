<template>
  <div class="feed">
    <div class="feed__inner">
      <Card v-for="item in items" :key="genUniqueKey(item.url)" :article="item" />
      <div class="feed__waypoint">
        <Spinner v-if="isFetching" />
      </div>
    </div>
  </div>
</template>

<script>
import uuidv5 from "uuid/v5";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import { EventBus } from "@/main.js";
export default {
  name: "CardList",
  components: {
    Card,
    Spinner
  },
  props: {
    items: Array,
    isFetching: Boolean
  },
  data() {
    return {
      page: 1
    };
  },
  methods: {
    handleScroll() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow && !this.isFetching) {
        this.page += 1;

        console.log(this.page);

        EventBus.$emit("endReached", this.page);
      }
    },
    genUniqueKey(string) {
      return uuidv5(string, uuidv5.URL);
    }
  },
  mounted() {
    EventBus.$on("newsEnded", () => {
      window.removeEventListener("scroll", this.handleScroll);
    });

    EventBus.$on("resetPagination", () => {
      this.page = 1;
      window.addEventListener("scroll", this.handleScroll);
    });
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang="scss">
.feed {
  margin: 0 auto;
  max-width: 960px;

  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__waypoint {
    width: 100%;
  }
}
</style>
