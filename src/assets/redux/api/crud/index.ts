import { api as index } from "..";
import { CRUD } from "./types";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		//!Get
		getTodos: builder.query<CRUD.GetCrudRsponse, CRUD.GetCrudRequest>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["crud"],
		}),
		//!Post
		postTodo: builder.mutation<CRUD.CreateResponse, CRUD.CreateCrudRequest>({
			query: ({ name, img, price }) => ({
				url: "",
				method: "POST",
				body: { name, img, price },
			}),
			invalidatesTags: ["crud"],
		}),

		//!Delete
		deletTodo: builder.mutation<CRUD.DeleteResponse, CRUD.DeleteCrudRequest>({
			query: (_id) => ({
				url: `${_id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["crud"],
		}),

		//!PATCH
		editTodo: builder.mutation<CRUD.UpdateResponse, CRUD.UpdateCrudRequest>({
			query: ({ newData, _id }) => ({
				url: `/${_id}`,
				method: "PATCH",
				body: newData,
			}),
			invalidatesTags: ["crud"],
		}),
	}),
});

export const {
	useGetTodosQuery,
	usePostTodoMutation,
	useDeletTodoMutation,
	useEditTodoMutation,
} = api;
