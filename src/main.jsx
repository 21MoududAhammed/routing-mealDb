import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import About from "./components/About.jsx";
import NotFound from "./components/NotFound.jsx";
import Contact from "./components/Contact.jsx";
import { fetchMealDetails, fetchMeals } from "./loaders/index.jsx";
import MealDetails from "./components/MealDetails.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound/>}>
      <Route 
      path="" 
      element={<Home />}
     loader={fetchMeals}
      />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>}/>
      <Route 
      path="/:mealId" 
      element={<MealDetails/>}
      loader={fetchMealDetails}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
