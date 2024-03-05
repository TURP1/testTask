import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TASKS_KEY } from '../reducers/constant_keys'
import { BASE_URL, ROUTES } from '../../constants/routes';

export type StatusType = "new" | "in progress" | "completed"
export type priorityType = "high" | "mid" | "low"

export type TaskType = {
    id: string;
    title: string;
    description: string;
    status: StatusType;
    priority: priorityType;
}

export const tasksAPI = createApi({
    reducerPath: TASKS_KEY,
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Tasks', 'Task'],
    endpoints: (builder) => ({
        getTasks: builder.query<TaskType[], void>({
            query: () => ROUTES.TASKS,
            providesTags: ['Tasks']
        }),
        getTask: builder.query<TaskType, string>({
            query: (id) => `${ROUTES.TASKS}/${id}`,
            providesTags: ['Task']
        }),
        createTask: builder.mutation<void, TaskType>({
            query: (task) => ({
                url: ROUTES.TASKS,
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: builder.mutation<void, string>({
            query: (id) => ({
                url: `${ROUTES.TASKS}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tasks']
        }),
        updateTask: builder.mutation<void, TaskType>({
            query: (task) => ({
                url: `${ROUTES.TASKS}/${task.id}`,
                method: 'PUT',
                body: task
            }),
            invalidatesTags: ['Tasks']
        }),
    })
})

export const { useGetTasksQuery, useGetTaskQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = tasksAPI