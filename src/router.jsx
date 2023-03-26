import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "./App";
import Add from "./components/Add";
import Show from "./components/Show";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
    {
      path: "/show",
      element: <Show/>,
    }
  ]);
  

  export default router;