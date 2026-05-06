import React from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";

import Shop from "./components/Pages/petsupplier.jsx"
import Footer from "./components/Footer";

// import About from "./components/Ourstory";

// import Chefs from "./components/Pages/OurChefs";
import PrivacyPolicy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/Terms.jsx";
// import FAQ from "./components/Pages/FAQ.jsx";

import Contact from "./components/Pages/Contact.jsx";
import Grooming from "./components/Pages/grooming.jsx";
import VeterinaryCare from "./components/Pages/vetcare.jsx";

// ✅ Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";



// ✅ NEW SMART LAYOUT - HIDES NAVBAR/FOOTER FOR ADMIN!
function Layout({ children }) {
  const location = useLocation();
  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(location.pathname);

  return (
    <div className="bg-[#fcf8f3] text-black font-sans min-h-screen flex flex-col">
      {/* ✅ NAVBAR - HIDE FOR ADMIN */}
      {!hideLayout && (
        <div className="pt-10 px-10 pb-0 flex-shrink-0">
          <Navbar />
        </div>
      )}
      
      {/* ✅ CONTENT */}
      <div className="pt-10 px-10 pb-0 flex-1">
        {children}
      </div>
      
      {/* ✅ FOOTER - HIDE FOR ADMIN */}
      {!hideLayout && (
        <div className="pt-0 pb-10 px-10 flex-shrink-0">
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ CUSTOMER PAGES - WITH LAYOUT */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        



        {/* <Route path="/Supplements" element={<Layout><Suppliment/></Layout>} />
        <Route path="/Fitness" element={<Layout><Fitness/></Layout>} />
        
       
       
        <Route path="/about" element={<Layout><About /></Layout>} />

        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/FAQ" element={<Layout><FAQ /></Layout>} />
        <Route path="/pharmacy" element={<Layout><Parmacy/></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} /> */}

        <Route path="/Shop" element={<Layout><Shop/></Layout>} />
        <Route path="/Grooming" element={<Layout><Grooming/></Layout>} />
        <Route path="/vetcare" element={<Layout><VeterinaryCare/></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        
        {/* ✅ ADMIN PAGES - NO LAYOUT! */}
        <Route path="/signup" element={<Layout><SignUp /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />
        
        {/* ✅ 404 */}
        <Route path="*" element={
          <Layout>
            <div className="text-center py-12 font-sans">
              404: Page Not Found
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;