import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface SubscriptionProps {
  id: string;
  company_name: string;
  date: string;
  consumed_hours: string;
  subscription_hours: string;
  subscription_name: string;
}

export const companySubscriptionsApi = createApi({
  reducerPath: 'companySubscriptionsApi',
  // TODO: replace baseUrl with actual dev api, once available
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://df-api-mock-json-server.herokuapp.com/',
  }),
  tagTypes: ['companySubscriptions'],
  endpoints: (builder) => ({
    companySubscriptionsCompanies: builder.query({
      query: () => `/subscriptions`,
      // TODO: add modifier of results here
      // transformResponse: res => res.sort((a, b) => b.id - a.id),
      providesTags: ['companySubscriptions'],
    }),
    companySubscriptionsCompany: builder.query({
      query: (id: number) => `/subscriptions/${id}`,
      providesTags: ['companySubscriptions'],
    }),
    updateCompanySubscriptions: builder.mutation({
      query: (payload: any) => ({
        url: `/subscriptions/${payload.id}`,
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['companySubscriptions'],
    }),
  }),
});

export const {
  useCompanySubscriptionsCompaniesQuery,
  useCompanySubscriptionsCompanyQuery,
  useUpdateCompanySubscriptionsMutation,
} = companySubscriptionsApi;
