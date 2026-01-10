import React from "react";
import HomeLayout from "./layouts/HomeLayout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs  from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import ContactLayout from "./layouts/ContactLayout";
import Contactinfo from "./components/Contactinfo";
import ContactForm from "./components/ContactForm";
import JobLayout from "./layouts/JobLayout";
import JobDetails from "./components/JobDetails";
import Error from "./components/Error";
import { jobDetailsLoader, jobsData } from "./loaders/loader";
import HookPractice from "./pages/HookPractice";

const App = () => {
    
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products  />} />
                <Route path="about" element={<About  />} />
                <Route path="contact" element={<ContactLayout />}>
                  <Route path="info" element={<Contactinfo />}/>
                  <Route path="form" element={<ContactForm />}/>
                
                </Route>
                <Route path="jobs" element={<JobLayout />}>
                  <Route index element={<Jobs />} loader={jobsData}/>
                  <Route path=":jobId" element={<JobDetails />} loader={jobDetailsLoader} errorElement={<Error />}/>
                </Route>
                <Route path="hooks" element={<HookPractice />} />
                <Route path="*" element={<NotFound />}/>

            </Route>
        )
    )

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};
export default App;
