import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useRouter } from "next/navigation";

// const baseQuery: fetchBaseQuery({
//   baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
//   credentials: "include",
// }),

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
  credentials: "include",
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.log("sending refresh token");
    //send refresh token to get new accesstoken
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    console.log("refresh result", refreshResult?.error?.status);
    if (refreshResult?.data) {
      //console.log(refreshResult?.data);
      //retry the original query with the new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      //redirect to login page

      console.log("logouyt");
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
