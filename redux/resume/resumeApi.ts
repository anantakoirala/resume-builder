"use client";
import { apiSlice } from "../apiSlice";
import { setResume, setResumes } from "./resumeSlice";
export const resumeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (data) => ({
        url: "/resume",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled; // Waits for the query/mutation to resolve
          console.log("Resume creation successful:", result.data);
          //   dispatch(userRegistration({ token: result.data.activationToken }));
        } catch (error: any) {
          console.log("asdfasdfasdf");
          console.log(error);
        }
      },
    }),
    getResumes: builder.query({
      query: () => "/resume",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        console.log("bhayo");
        dispatch(setResumes(result.data));
      },
    }),
    getResume: builder.query({
      query: (id) => ({
        url: `/resume/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;

        dispatch(setResume(result.data));
      },
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useGetResumesQuery,
  useGetResumeQuery,
} = resumeApi;
