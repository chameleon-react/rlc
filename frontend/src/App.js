import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import { useSelector } from 'react-redux'
import About from "./pages/static/about";
import FAQ from "./pages/static/faq";
import Profile from "./pages/profile/index";
import NewAds from "./pages/user/newAds";
import UserDashboard from "./pages/user/dashboard";
import AdminDashboard from "./pages/admin/dashboard";
import Auth from "./pages/auth";
import AdvertiserRegister from "./pages/auth/register/advertiser";
import UserRegister from "./pages/auth/register/user";
import TermsAndConditions from "./pages/static/TermsAndConditions";
import Filter from "./pages/filter";

import { BsWhatsapp } from 'react-icons/bs'
import NotFound from "./pages/404";


function App() {
  const userLogin = useSelector(state => state.user.isLogin)
  const adminLogin = useSelector(state => state.admin.isLogin)
  return (
    <div className="App  font-roboto">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <Routes >
        {/* homepage */}
        <Route path="/" element={<Home />} />
        {/* login and signup */}
        <Route path="/auth"  >
          <Route index element={<Auth />} />
          <Route path="register">
            <Route path='user' element={<UserRegister />} />
            <Route path='advertiser' element={<AdvertiserRegister />} />
          </Route>

        </Route>


        <Route path={'/profile/:id'} element={<Profile />} />

        <Route path="/filter" element={<Filter />} />


        {/* protected route */}
        {
          userLogin && <>
            <Route path="/ads/new" element={<NewAds />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </>
        }
        {
          adminLogin && <>
            <Route path="/dashboard" element={<AdminDashboard />} />
          </>
        }

        {/* static pages */}
        <Route path="/static">
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
        </Route>


        {/* <Route path="*" element={<Navigate replace to={'/auth'} />} /> */}
        <Route path="*" element={<NotFound />} />

      </Routes>
      <a target={'_blank'} rel="noreferrer" href="https://api.whatsapp.com/send?phone=+44%207915%20645810&text=Hi" className="hidden md:fixed w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] bottom-[80px] right-[20px] bg-[#25d366] text-white rounded-full text-center font-[20px] lg:font-[30px] shadow-[2px 2px 3px #999] z-[100] flex justify-center items-center text-3xl lg:text-4xl"><BsWhatsapp /></a>
    </div>
  );
}

export default App;
