import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';
import Grandpa from './Components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('fakeData.json')
      },
      {
        path:'review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
