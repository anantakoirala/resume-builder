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
    updateResume: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("updated", result);
        } catch (error: any) {
          console.log("updated errir");
          console.log(error);
        }
      },
    }),
    getResumes: builder.query({
      query: () => "/resume",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
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
    printResume: builder.query({
      query: (id) => ({
        url: `/resume/print/${id}`,
        method: "GET",
        credentials: "include" as const,
        responseHandler: (response: any) => response.blob(),

        // transformResponse: (response: Blob) => {
        //   // Convert the Blob object to a base64-encoded string
        //   return new Promise((resolve, reject) => {
        //     const reader = new FileReader();
        //     reader.onload = () => {
        //       const base64String = reader.result;
        //       resolve(base64String);
        //     };
        //     reader.onerror = reject;
        //     reader.readAsDataURL(response);
        //   });
        // },
      }),
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useUpdateResumeMutation,
  useGetResumesQuery,
  useGetResumeQuery,
  useLazyPrintResumeQuery,
} = resumeApi;
