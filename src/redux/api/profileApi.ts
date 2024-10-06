import { api } from "./index";

const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: () => ({
        url: "/auth/profile",
        Headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }),
    }),
  }),
});

export const { useProfileQuery } = profileApi;
