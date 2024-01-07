import ReactDOM from 'react-dom/client'
import "./index.css";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from "react-router-dom";
import {Home , About , Contact ,User} from "./components/index";
import Layout from './layout';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='' element={<Home/>}/>
            <Route path='' element={<Home/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes}/>
)
