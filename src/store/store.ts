import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './slices/projectSlice';
import sceneReducer from './slices/sceneSlice';

export const store = configureStore({
  reducer: {
    project: projectReducer,
    scene: sceneReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;