import ReactDOM from 'react-dom/client'
import "./index.css";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from "react-router-dom";
import {Home , About , Contact ,User} from "./components/index";
import Layout from './layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='user/:userName' element={<User/>} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
