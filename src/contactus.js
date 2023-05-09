import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Contactus = () => {
    return (
        <div className='sub_page'>
            <div class="hero_area">
                {/* <!-- header section strats --> */}
                <header class="header_section">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href="index.html">
                                <span>
                                    Urotaxi
                                </span>
                            </a>
                            <a></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul class="navbar-nav  ">
                                        <li class="nav-item "><Link to={"/"}>
                                            <a class="nav-link">Home</a></Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link to={"/aboutus"}><a class="nav-link"> About</a></Link>
                                        </li>
                                        <li class="nav-item "><Link to={"/services"}>
                                            <a class="nav-link"> Services</a></Link>
                                        </li>
                                        <li class="nav-item "><Link to={"/news"}>
                                            <a class="nav-link"> News </a></Link>
                                        </li>
                                        <li class="nav-item active"><Link to={"/contactus"}>
                                            <a class="nav-link">Contact Us <span class="sr-only">(current)</span></a></Link>
                                        </li>
                                        <li class="nav-item"><Link to={"/simplogin"}>
                                            <a class="nav-link">Login</a></Link>
                                        </li>
                                    </ul>
                                
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* <!-- end header section --> */}
            </div>

            {/*<!-- contact section -->*/}

            <section class="contact_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Any Problems <br></br>
                            Any Questions
                        </h2>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-5  offset-md-1">
                            <div class="contact_form">
                                <h4>
                                    Get In touch
                                </h4>
                                <form action="">
                                    <input type="text" placeholder="Name"></input>
                                    <input type="text" placeholder="Phone Number"></input>
                                    <input type="text" placeholder="Message" class="message_input"></input>
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 px-0">
                            <div class="img-box">
                                <img src="images/contact-img.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end contact section --> */}

            {/* <!-- info section --> */}

            <section class="info_section layout_padding-top layout_padding2-bottom">
                <div class="container">
                    <div class="box">
                        <div class="info_form">
                            <h4>
                                Subscribe Our Newsletter
                            </h4>
                            <form action="">
                                <input type="text" placeholder="Enter your email"></input>
                                <div class="d-flex justify-content-end">
                                    <button>

                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="info_links">
                            <ul>
                                <li class=" ">
                                    <a class="" href="index.html">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="">
                                    <a class="" href="about.html"> About</a>
                                </li>
                                <li class="">
                                    <a class="" href="service.html"> Services </a>
                                </li>
                                <li class="">
                                    <a class="" href="news.html"> News</a>
                                </li>
                                <li class="">
                                    <a class="" href="contact.html">Contact Us</a>
                                </li>
                                <li class="">
                                    <a class="" href="#">Login</a>
                                </li>
                            </ul>
                        </div>
                        <div class="info_social">
                            <div>
                                <a href="">
                                    <img src="images/fb.png" alt=""></img>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="images/twitter.png" alt=""></img>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="images/linkedin.png" alt=""></img>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src="images/instagram.png" alt=""></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <!-- end info section --> */}

            {/* <!-- footer section --> */}
            <section class="container-fluid footer_section">
                <div class="container">
                    <p>
                        &copy; 2021 All Rights Reserved By
                        <a href="https://html.design/">Free Html Templates</a>
                    </p>
                </div>
            </section>
            {/* <!-- footer section --> */}

        </div>
    )
}
export default Contactus;