// src/store/index.ts
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from './redcuers';

// const middleware = [...getDefaultMiddleware(), thunk];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// });

// export type AppDispatch = typeof store.dispatch;
// export default store;

// import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
// import rootReducer from './redcuers'
// // ...

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import rootReducer from './redcuers';
// import thunk from 'redux-thunk';

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
//     serializableCheck:false
//   }), thunk],
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// export default store;

// store.ts

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false
//   }).concat(ThunkMiddleware)
// });

// import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
// import rootReducer, { RootState } from "./redcuers";
// import thunk from "redux-thunk";


// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
// export default store;

import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import rootReducer from './redcuers'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
