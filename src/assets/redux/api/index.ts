import { fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_BACKEND_URL,
});
const baseQueryExtended: BaseQueryFn = async (arg, api, extraOptions) => {
	const result = await baseQuery(arg, api, extraOptions);
	return result;
};
export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryExtended,
	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes: ["crud"],
	endpoints: () => ({}),
});
