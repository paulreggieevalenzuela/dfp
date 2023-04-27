import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TODO: remove this when base usel below is already set to mock api json server
const YOUR_APP_KEY = '7b8bc790';
const YOUR_APP_ID = 'get_id_from_env';

export const clientInfoApi = createApi({
  reducerPath: 'clientInfoApi',
  // TODO: replace baseUrl with actual dev api, once available
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my.api.mockaroo.com/' }),
  endpoints: (builder) => ({
    getClientInfo: builder.mutation({
      query: () => {
        return {
          url: `client_info.json?key=${YOUR_APP_KEY}`,
          method: 'get',
        };
      },
    }),
  }),
});

export const { useGetClientInfoMutation } = clientInfoApi;
