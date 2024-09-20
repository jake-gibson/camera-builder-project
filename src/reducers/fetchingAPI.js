import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_HOST
    : 'http://localhost:3000';

export const aiProductInfo = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/` }),
  reducerPath: 'aiProductInfo',
  endpoints: (builder) => ({
    compareProducts: builder.mutation({
      query: (data) => ({
        url: `aiProductInfo?${data}`,
        method: 'GET',
      }),
      transformResponse: (response, meta, arg) => response.aiRes,
    }),
  }),
});

export const { useCompareProductsMutation } = aiProductInfo;
