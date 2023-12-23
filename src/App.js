import React from "react";
import "./index.css";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Loginpage from "./Loginpage";
import Register from "./Register";
import Homepage from "./Homepage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Homepage/>),
  },
  {
    path: "/login",
    element: (<Loginpage/>),
  },
  {
    path: "/Register",
    element: (<Register/>),
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
