import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
       <RouterProvider router={router} />

</Provider>,
)
