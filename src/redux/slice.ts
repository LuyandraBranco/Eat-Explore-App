import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface User {
  idUser: number;
  username: string;
  accessTokenPS: string;
  accessTokenGoogle: string;
  emailGoogle: string;
  pathImage: string;
  displayName: string;
}

const initialState: User = {
  idUser: 0,
  username: '',
  accessTokenPS: '',
  accessTokenGoogle: '',
  emailGoogle: '',
  pathImage: '',
  displayName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIdUser: (state, action: PayloadAction<number>) => {
      state.idUser = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setAccessTokenPS: (state, action: PayloadAction<string>) => {
      state.accessTokenPS = action.payload;
    },
    setAccessTokenGoogle: (state, action: PayloadAction<string>) => {
      state.accessTokenGoogle = action.payload;
    },
    setEmailGoogle: (state, action: PayloadAction<string>) => {
      state.emailGoogle = action.payload;
    },
    setPathImage: (state, action: PayloadAction<string>) => {
      state.pathImage = action.payload;
    },
    setDisplayName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIdUser,
  setUsername,
  setAccessTokenPS,
  setAccessTokenGoogle,
  setEmailGoogle,
  setDisplayName,
  setPathImage,
} = userSlice.actions;

export default userSlice.reducer;
