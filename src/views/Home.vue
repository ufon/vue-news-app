<template>
  <div>
      <Search :value="searchQuery" :callback="searchCallback" />
      <CardList :isFetching="isFetching" :items="articles" />
  </div>
</template>

<script>
import { ArticlesService } from "@/core/services/article.service";
import CardList from "@/components/CardList";
import Search from "@/components/Search";
import router from "@/router";
import { EventBus } from "@/main.js";
export default {
  name: "HomePage",
  components: {
    CardList,
    Search
  },
  methods: {
    getArticlesByPage(page = 1) {
      return ArticlesService.topHeadlines(page).then(({ data }) => {
        return data;
      });
    },
    getArticlesByQuery(query, page = 1) {
      return ArticlesService.fetchByQuery(query, page).then(({ data }) => {
        return data;
      });
    },
    searchCallback(query) {
      this.searchQuery = query;
      if (query.length === 0) {
        router.replace({ name: "home" });
        EventBus.$emit("resetPagination");
        this.search = false;
        this.page = 1;
        this.isFetching = true;
        this.getArticlesByPage().then(result => {
          this.articles = result.articles;
          this.isFetching = false;
        });
      } else {
        router.replace({ name: "search", params: { query: query } });
        EventBus.$emit("resetPagination");
        this.search = true;
        this.isFetching = true;
        this.getArticlesByQuery(query).then(result => {
          this.articles = result.articles;
          this.isFetching = false;
        });
      }
    }
  },
  data() {
    return {
      articles: [],
      page: 1,
      isFetching: true,
      search: false,
      searchQuery: ""
    };
  },
  beforeMount() {
    this.isFetching = true;

    let search = this.$route.name;

    if (search === "search") {
      this.search = true;
      this.searchQuery = this.$route.params.query;
      this.getArticlesByQuery(this.searchQuery).then(result => {
        this.articles = result.articles;
        this.isFetching = false;
      });
    } else {
      this.getArticlesByPage().then(result => {
        this.articles = result.articles;
        this.isFetching = false;
      });
    }
  },
  mounted() {
    EventBus.$on("endReached", page => {
      this.isFetching = true;
      if (this.search) {
        this.getArticlesByQuery(this.searchQuery, page).then(result => {
          if (result.articles.length === 0) EventBus.$emit("newsEnded");
          this.articles = [...this.articles, ...result.articles];
          this.isFetching = false;
        });
      } else {
        this.getArticlesByPage(page).then(result => {
          if (result.articles.length === 0) EventBus.$emit("newsEnded");
          this.articles = [...this.articles, ...result.articles];
          this.isFetching = false;
        });
      }
    });
  }
};
</script>
