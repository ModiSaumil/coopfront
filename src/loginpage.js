import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const Lrpage = () => {

  const [isContainerActive, setIsContainerActive] = React.useState(false);
  const signUpButton = () => {
    setIsContainerActive(true);
  };
  const signInButton = () => {
    setIsContainerActive(false);
  };

  return (
    <div>
      <div className={`cont${isContainerActive ? " right-panel-active" : ""}`} id="cont" style={{ height: "500px", marginLeft: "15%" }}>
        <div className="fm-cont sign-up-cont">
          <form action="#" className='fm'>
            <Link to={"/"}><a className='atag'><h5>Home</h5></a></Link>
            <h1>Create Account</h1>
            {/* <div className="social-cont">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
            <span>use your email for registration</span>
            <input type="text" placeholder="Name" style={{ marginTop: "2%" }} />
            <input type="email" placeholder="Email" style={{ marginTop: "2%" }}/>
            <input type="password" placeholder="Password" style={{ marginTop: "2%" }}/>
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
              marginTop:"2%"
            }}>Sign Up</button>
          </form>
        </div>
        <div className="fm-cont sign-in-cont">
          <form action="#" className='fm'>
          <Link to={"/"}><a href='#' className='atag'><h5>Home</h5></a></Link>
            <h1>Sign in</h1>
            <span>use your account</span>
            <input type="email" placeholder="Email" style={{ marginTop: "2%" }}/>
            <input type="password" placeholder="Password" style={{ marginTop: "2%" }}/>
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
              marginTop:"2%"
            }}>Sign In</button>
          </form>
        </div>
        <div className="overlay-cont">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="btn" id="signIn" onClick={signInButton}>Sign In</button>
              <p>For Comapny Sign In</p> 
              <Link to={"/companyloginpage"}><button className="btn">click here</button></Link>            
              </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="btn" id="signUp" onClick={signUpButton}>Sign Up</button>
              <p>For Comapny Sign Up</p> 
              <Link to={"/companyloginpage"}><button className="btn">click here</button></Link>            
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lrpage;