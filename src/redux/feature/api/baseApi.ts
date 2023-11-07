import { getFromLocalStorage } from "@/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    prepareHeaders: (headers) => {
      const token = getFromLocalStorage("accessToken");
      if (token) {
        const parseToken = JSON.parse(token);
        headers.set("authorization", `Bearer ${parseToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["user", "task"],
});
