import { configureStore } from '@reduxjs/toolkit'
import { getReducers } from './reducers'
import { tasksAPI } from './services/tasks'

export const store = configureStore({
    reducer: getReducers(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tasksAPI.middleware),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch