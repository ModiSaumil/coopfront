import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Companyloginpage = () => {
  const [isContainerActive, setIsContainerActive] = React.useState(false);

  const signUpButton = () => {
    setIsContainerActive(true);
  };
  const signInButton = () => {
    setIsContainerActive(false);
  };

  const [Cname, setCname] = React.useState("");
  const [Oname, setOname] = React.useState("");
  // const [Email, setEmail] = React.useState("");
  // const [MobileNo, setMobileNo] = React.useState("");
  const [State, setState] = React.useState("");
  const [City, setCity] = React.useState("");
  // const [Country, setCountry] = React.useState("");
  const [VehicalDetail, setVehicalDetail] = React.useState("");
  const [BankDetail, setBankDetail] = React.useState("");
  const [AdharaCard, setAdharaCard] = React.useState("");
  // const [Password, setPassword] = React.useState("");
  // const [ConfirmPasswrord, setConfirPassword] = React.useState("");
  const [RegisterDate, setRegisterDate] = React.useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!Cname || !Oname || !State || !City || !VehicalDetail || !BankDetail || !AdharaCard || !RegisterDate) {
      //setError(true);
      return false;
    }
    console.warn(Cname, Oname, City, State, VehicalDetail, BankDetail, AdharaCard, RegisterDate);
    let result = await fetch('/company/companyregistration', {
      method: 'post',
      body: JSON.stringify({
        Cname, Oname, State, City, VehicalDetail, BankDetail, AdharaCard, RegisterDate
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    console.wan(result);
    navigate('/');
  };

  return (
    <div>
      <div className={`cont${isContainerActive ? " right-panel-active" : ""}`} id="cont" style={{ marginLeft: "15%" }}>
        <div className="fm-cont sign-up-cont">
          <form action="#" className='fm'>
          <Link to={"/"}><a href='#' className='atag'><h5>Home</h5></a></Link>
            <h1>Create Company Account</h1>
            {/* <div className="social-cont">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
            <span>use your email for registration</span>
            <input type="text" value={Cname} onChange={(e) => { setCname(e.target.value) }} placeholder="Comapny Name" style={{ marginTop: "2%" }} />
            <input type="text" value={Oname} onChange={(e) => { setOname(e.target.value) }} placeholder="Owner Name" style={{ marginTop: "2%" }} />
            {/* <input type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" style={{ marginTop: "2%" }}/> */}
            {/* <input type="number" value={MobileNo} onChange={(e) => { setMobileNo(e.target.value) }} placeholder="Phone number" style={{ marginTop: "2%" }}/> */}
            <input type="text" value={State} onChange={(e) => { setState(e.target.value) }} placeholder="State" style={{ marginTop: "2%" }} />
            <input type="text" value={City} onChange={(e) => { setCity(e.target.value) }} placeholder="City" style={{ marginTop: "2%" }} />
            {/* <input type="text" value={Country} onChange={(e) => { setCountry(e.target.value) }} placeholder="Country" style={{ marginTop: "2%" }}/> */}
            <input type="text" value={VehicalDetail} onChange={(e) => { setVehicalDetail(e.target.value) }} placeholder="Vehical details" style={{ marginTop: "2%" }} />
            <input type="text" value={BankDetail} onChange={(e) => { setBankDetail(e.target.value) }} placeholder="Bank details" style={{ marginTop: "2%" }} />
            <input type="number" value={AdharaCard} onChange={(e) => { setAdharaCard(e.target.value) }} placeholder="Gumastadhara number" style={{ marginTop: "2%" }} />
            {/* <input type="password" value={Password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" style={{ marginTop: "2%" }}/> */}
            {/* <input type="password" value={ConfirmPasswrord} onChange={(e) => { setConfirPassword(e.target.value) }} placeholder="Confirm Password" style={{ marginTop: "2%" }}/> */}
            <input type="date" value={RegisterDate} onChange={(e) => { setRegisterDate(e.target.value) }} placeholder="Enter register date" style={{ marginTop: "2%" }} />
            <button onClick={handleSignUp} style={{
              border: "1px solid #ffbb00",
              borderRadius: "20px",
              padding: "12px 45px",
              backgroundColor: "#ffbb00",
              color: "FFFFFF",
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
              transition: "transform 80ms ease-in",
              marginTop: "2%"
            }}>Sign Up</button>
          </form>
        </div>
        <div className="fm-cont sign-in-cont">
          <form action="#" className='fm'>
          <Link to={"/"}><a className='atag'><h5>Home</h5></a></Link>
            <h1>Sign in</h1>
            <span>use your Company account</span>
            <input type="email" placeholder="Email" style={{ marginTop: "2%" }} />
            <input type="password" placeholder="Password" style={{ marginTop: "2%" }} />
            <a href="/forgotpasspage" className='atag'>Forgot your password?</a>
            <button style={{
              border: "1px solid #ffbb00",
              borderRadius: "20px",
              padding: "12px 45px",
              backgroundColor: "#ffbb00",
              color: "FFFFFF",
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
              transition: "transform 80ms ease-in",
              marginTop: "2%"
            }}>Sign In</button>
          </form>
        </div>
        <div className="overlay-cont">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your Company info</p>
              <button className="btn" id="signIn" onClick={signInButton}>Sign In</button>
              <p>For user Sign Up</p> 
              <Link to={"/simplogin"}><button className="btn">click here</button></Link>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend !</h1>
              <p>Enter your company details and start journey with us</p>
              <button className="btn" id="signUp" onClick={signUpButton}>Sign Up</button>
              <p>For user Sign Up</p> 
              <Link to={"/simplogin"}><button className="btn">click here</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Companyloginpage;