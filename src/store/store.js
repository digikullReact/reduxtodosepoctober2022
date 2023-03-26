import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../slices/todoslice'

export const store = configureStore({
  reducer: {
    todoReducer:todoReducer
  },
})