import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";


const persistConfig = {
  key: 'root',
  storage,
}

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer)

const store = configureStore({
  reducer: { user: persistedUserReducer },
  middleware: getDefaultMiddleware =>
      // This is needed because redux toolkit and persist don't work together nicely
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default store;
