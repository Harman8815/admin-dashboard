import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Product from "../../../server/models/Product";
import { getProducts } from "../../../server/controller/client";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
        "User", "Product"
    ],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: (id) => `client/products/${id}`,
            providesTags: ["Product"],
        }),
    }),
});

export const {
    useGetUserQuery,
} = api;