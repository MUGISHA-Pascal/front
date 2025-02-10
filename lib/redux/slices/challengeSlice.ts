import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type ChallengeType = {
  _id?: string;
  title: string;
  deadline: Date;
  duration: number;
  moneyPrice: number;
  contactEmail: string;
  projectBrief: string;
  requirements: string[];
  product_design: string[];
  deliverables: string[];
  category: string;
  status?: string;
  seniority_level: string;
  skills_needed: string[];
  startingAt: Date;
  filterText?: string;
};

export const challengeSlice = createApi({
  reducerPath: "challenge",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skills-challenge.onrender.com/challenges",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChallenges: builder.query<ChallengeType[], void>({
      query: () => "/",
    }),
    getChallengesByDaysAgo: builder.query<ChallengeType[], number>({
      query: (daysAgo) => `/total/${daysAgo}`,
    }),
    getOpenChallengeDaysAgo: builder.query<ChallengeType[], number>({
      query: (daysAgo) => `/open/${daysAgo}`,
    }),
    getOngoingChallengeDaysAgo: builder.query<ChallengeType[], number>({
      query: (daysAgo) => `/ongoing/${daysAgo}`,
    }),
    getCompletedChallengeDaysAgo: builder.query<ChallengeType[], number>({
      query: (daysAgo) => `/completed/${daysAgo}`,
    }),
    getChallengeById: builder.query<ChallengeType, string>({
      query: (id) => `/${id}`,
    }),
    createChallenge: builder.mutation<
      { message: string; newChallenge: ChallengeType },
      { id: string; newChallenge: ChallengeType }
    >({
      query: ({ id, newChallenge }) => ({
        url: `/${id}`,
        method: "POST",
        body: newChallenge,
      }),
    }),
    updateChallenge: builder.mutation<
      { message: string; newChallenge: ChallengeType },
      { id: string; newChallenge: ChallengeType }
    >({
      query: ({ id, newChallenge }) => ({
        url: `/${id}`,
        method: "PUT",
        body: newChallenge,
      }),
    }),
    deleteChallenge: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    getChallengeByStatus: builder.query<ChallengeType[], string>({
      query: (status) => `/admin/${status}`,
    }),
  }),
});

export const {
  useGetChallengesQuery,
  useGetOpenChallengeDaysAgoQuery,
  useGetOngoingChallengeDaysAgoQuery,
  useGetCompletedChallengeDaysAgoQuery,
  useGetChallengeByIdQuery,
  useCreateChallengeMutation,
  useUpdateChallengeMutation,
  useDeleteChallengeMutation,
  useGetChallengeByStatusQuery,
  useGetChallengesByDaysAgoQuery,
} = challengeSlice;
