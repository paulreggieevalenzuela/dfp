import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TotalHoursProps {
  id: string;
  company_name: string;
  date: string;
  consumed_hours: string;
  subscription_hours: string;
}

export const totalHoursApi = createApi({
  reducerPath: 'totalHoursApi',
  // TODO: replace baseUrl with actual dev api, once available
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://df-api-mock-json-server.herokuapp.com/',
  }),
  tagTypes: ['TotalHours'],
  endpoints: (builder) => ({
    totalHoursCompanies: builder.query({
      query: () => `/totalHours`,
      // TODO: add modifier of results here
      // transformResponse: res => res.sort((a, b) => b.id - a.id),
      providesTags: ['TotalHours'],
    }),
    totalHoursCompany: builder.query({
      query: (id: number) => `/totalHours/${id}`,
      providesTags: ['TotalHours'],
    }),
    updateCompanyTotalHours: builder.mutation({
      query: (payload: any) => ({
        url: `/totalHours/${payload.id}`,
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['TotalHours'],
    }),
  }),
});

export const {
  useTotalHoursCompaniesQuery,
  useTotalHoursCompanyQuery,
  useUpdateCompanyTotalHoursMutation,
} = totalHoursApi;
