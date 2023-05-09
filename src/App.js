import React from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Lrpage from "./loginpage";
import Companyloginpage from "./companylogin";
import Forgotpasswordpage from "./forgotpassword";
import Companyhome from "./components/company/companyhome";
import Homepage from "./homepage";
import Aboutus from "./aboutus";
import Services from "./services";
import News from "./news";
import Contactus from "./contactus";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/simplogin" element={<Lrpage/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
        <Route path="/companyloginpage" element={<Companyloginpage/>}></Route>
        <Route path="/forgotpasspage" element={<Forgotpasswordpage/>}></Route>
        <Route path="/companyhomepage" element={<Companyhome/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;