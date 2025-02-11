import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from "./routes/ErrorPage.jsx"
import Home from "./routes/Home"
import {
  createBrowserRouter, Navigate,
  RouterProvider
} from 'react-router-dom'
import Product from './components/Product.jsx'
import ProductInfo from './components/ProductInfo.jsx'
import Search from './routes/Search.jsx'


const router = createBrowserRouter([
  {//Rota pai
    path:"/",
    element:<App/>,//Componente base
    errorElement:<ErrorPage/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"contact", element:<Contact/>},
      //rotas dinamicas
      {path:"products/:id", element:<Product/>},
      //nested routes
      {path:"products/:id/info", element:<ProductInfo/>},
      //search
      {path:"search", element:<Search/>},
      //10 - redirect
      {path:"teste", element:<Navigate to="/"/>}
            ]
  },

  {path:"/contact", element:<Contact/>},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
