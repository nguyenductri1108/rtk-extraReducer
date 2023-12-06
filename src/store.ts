import { configureStore } from "@reduxjs/toolkit/react";

import mainReducer from "./slices/mainSlice";
import { mainApi } from "./slices/rtkQuery/mainPosts";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        [mainApi.reducerPath]: mainApi.reducer,
    },
    middleware: (getDefaultsMiddleware) => {
        return getDefaultsMiddleware().concat(mainApi.middleware);
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
