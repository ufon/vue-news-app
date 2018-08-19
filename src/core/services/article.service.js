import ApiService from "./api.service";

import { PAGE_SIZE, COUNTRY } from "@/core/constants/article.constants";

export const ArticlesService = {
  topHeadlines(page = 1) {
    return ApiService.query("top-headlines", {
      params: {
        country: COUNTRY,
        pageSize: PAGE_SIZE,
        page: page
      }
    });
  },
  fetchByQuery(query, page = 1) {
    return ApiService.query("everything", {
      params: {
        q: query,
        pageSize: PAGE_SIZE,
        page: page
      }
    });
  }
};
