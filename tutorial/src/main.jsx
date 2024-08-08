import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
// import Root from "./routes/root";

import ErrorPage from "./error-page";  // Asegúrate de que el archivo sea exportado correctamente
import Contact, {  loader as contactLoader,} from "./routes/contact";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root, {loader as rootLoader,action as rootAction,} from "./routes/root";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,  // Usa ErrorPage aquí
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />, 
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);