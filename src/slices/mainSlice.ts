import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface MainType {
    posts: IPost[];
}

const initialState: MainType = {
    posts: [],
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        deletePost: (state, action: PayloadAction<IPost>) => {
            console.log(123);
            state.posts = state.posts.filter((post) => post.id != action.payload.id);
        },
    },
});

export const { deletePost } = mainSlice.actions;

export default mainSlice.reducer;
