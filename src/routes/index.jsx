import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/layoutPublic";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/Error-page";
import Skills from "../pages/skills/Skills";
import Works from "../pages/works/Works";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<LayoutPublic/>,
    errorElement: <ErrorPage />,
    children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path: "/about",
            element: <About />,
            
          },
          {
            path: "/skills",
            element: <Skills />,
          },
          {
            path: "/works",
            element: <Works />,

          },
          {
            path: "/contact",
            element: <Contact />,

          },
    ]
  },

 
]);
