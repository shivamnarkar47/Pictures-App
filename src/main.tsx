import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import Home from './components/Home.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchGrid from './components/SearchGrid.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"/search/:str",
        element:<SearchGrid/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
