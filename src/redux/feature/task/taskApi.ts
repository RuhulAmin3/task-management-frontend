import { baseApi } from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (arg: Record<string, any>) => ({
        url: "/task",
        method: "GET",
        params: arg,
      }),
      providesTags: ["task"],
    }),

    getTask: builder.query({
      query: (id: string) => ({
        url: `/task/${id}`,
        method: "GET",
      }),
      providesTags: ["task"],
    }),

    addTask: builder.mutation({
      query: (data: Record<string, any>) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["task"],
    }),

    updateTask: builder.mutation({
      query: (data) => ({
        url: `/task/${data.id}`,
        method: "PATCH",
        body: data.body,
      }),
      invalidatesTags: ["task"],
    }),

    deleteTask: builder.mutation({
      query: (id: string) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const {
  useAddTaskMutation,
  useGetTaskQuery,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
