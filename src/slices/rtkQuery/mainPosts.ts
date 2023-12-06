import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { IPost } from "../mainSlice";

const base_url = "https://jsonplaceholder.typicode.com";

export const mainApi = createApi({
    reducerPath: "mainAPi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], undefined>({
            query: () => "/posts",
        }),
    }),
});

export const { useGetPostsQuery } = mainApi;
