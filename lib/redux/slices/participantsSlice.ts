import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Participant {
  id: string;
  user: string;
  challenge: string;
  status: boolean;
}

export const participantsApi = createApi({
  reducerPath: "participantsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/participants",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token'); 

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    }
  }),
   endpoints: (builder) => ({
      getParticipantsByDaysAgo: builder.query<Participant[],number>({
        query: (daysAgo) => `/${daysAgo}`,
      }),
    startChallenge: builder.mutation<
      Participant,
      { userId: string | undefined; challengeId: string }
    >({
      query: ({ userId, challengeId }) => ({
        url: `/${userId}/start/${challengeId}`,
        method: "POST",
      }),
    }),
    getChallengesByUserWithStatus: builder.query<
      any[],
      { userId: string | undefined; status: string }
    >({
      query: ({ userId, status }) => `/${userId}/${status}`,
    }),
    getStatus: builder.query({
      query: ({ userId, challengeId }) => `/status/${userId}/${challengeId}`,
    }),
  }),
});

export const {
  useStartChallengeMutation,
  useGetChallengesByUserWithStatusQuery,
  useGetStatusQuery,
  useGetParticipantsByDaysAgoQuery,
} = participantsApi;
