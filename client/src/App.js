import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';

import './assets/css/tailwind.css';
import './assets/css/icons.css';

import PropertyDetail from "./pages/property-detail";
import IndexTwo from "./pages/index-two";
import Sell from "./pages/sell";
import Aboutus from "./pages/aboutus";
import Features from "./pages/features";
import Login from "./pages/auth/login";
import Page404 from "./pages/404";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Contact from "./pages/contact";
import Grid from "./pages/grid";
import PropertyDetailEdit from "./pages/property-edit";
import ScrollToTop from './component/Scroll-top';
import PrivateRoute from "./component/PrivateRoute";
import Profile from "./pages/profile";
import PropertyAdd from "./pages/property-add";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('light');
  }, []);


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes >
        <Route path="/" element={<IndexTwo />} />
        <Route path="/index" element={<IndexTwo />} />

        <Route path="/property-detail/:id" element={<PropertyDetail />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Features />} />
        <Route path="/sign-in" element={<Login />} />

        <Route path="/properties" element={<Grid />} />

        <Route element={<PrivateRoute />}>
        <Route path="/properties/edit/:id" element={<PropertyDetailEdit />} />
        <Route path="/add-property" element={<PropertyAdd />} />
        <Route path="/profile/:id" element={<Profile />} />

        </Route>

        <Route path="/404" element={<Page404 />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter >
  )

}
export default App;
