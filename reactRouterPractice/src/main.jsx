import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from './Layout'
import "./index.css";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
import { Home, About, Contact , User ,Github ,getEfficientValueFromApi} from './components/index';

// router path syntax1 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// router path syntax2 (best way ) 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:username' element={<User />}/>
      <Route path='github' loader={getEfficientValueFromApi} element={<Github />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
