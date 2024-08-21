import logo from './logo.svg';
import './App.css';
import Task1 from './task1';
import Home from './component/home';
import Navbar from './component/navbar';
import SignInSide from './component/login';
import Footer from './component/footer';
import { Toaster } from 'sonner';
import Privacy from './component/privacy';
import Corporate from './component/about';
import Farmer from './component/farmer';
import FarmerHome from './component/farmerhome';
import Marquee from './class_activity/Marque';
import PaymentForm from './component/payment';
import ProfilePage from './component/profile';
import ProfileDropdown from './component/profiledropdown';
import WorldMapWithCurrentLocation from './component/map';



// import HigherOrderFunction from './component/higherorderfunction';
// import Increment from './component/auto_inc_dec';


function App() {
  return (
   <div>
    {/* <Task1 /> */}
    {/* <HigherOrderFunction /> */}
    {/* <Increment /> */}
    {/* <Home /> */}

    <Toaster richColors />

    <Navbar />
    <br />
    <br />
 {/* <SignInSide /> */}
 <Footer />
 {/* <Marquee /> */}
{/* <Farmer /> */}
 {/* <Privacy /> */}
 {/* <Corporate /> */}
 {/* <FarmerHome /> */}
    {/* <PaymentForm /> */}
    {/* <ProfilePage /> */}
    {/* <ProfileDropdown /> */}
   {/* <WorldMapWithCurrentLocation /> */}
   </div>
  );
}

export default App;
