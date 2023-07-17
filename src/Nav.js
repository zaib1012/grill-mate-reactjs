import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Nav.css";
const Nav = () => {
  const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <>
    <>
        <div>
          <nav className="navbar navbar-expand-lg main-header navbar-dark">
            <div className="container-fluid fs-4">
              <a className="navbar-brand fs-4 " href="#">
                <img className="main-logo" src="./images/main-logo.jpg"></img>
              </a>

              <div className="collapse navbar-collapse main-head" id="navbarSupportedContent">
                <ul className="navbar-nav  ms-auto me-auto mb-2 mb-lg-0  ">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">
                      contact us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>


              <span style={{ marginRight: "15px" }} className="search-bar-div">
                <input type="text" placeholder="Search" className="main-search" />
                <i class="bi bi-search" style={{ fontSize: "14px", marginRight: "5px" }}></i>
              </span>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

            </div>
          </nav>
          <div className="main-banner">
            <div className="banner-left">
              <p className="para">chase the new flavour</p>
              <p className="second-para">The Key To Fine Dining</p>
              <p className="third-para">Sit tellus lobortis sed senectus vivamus molestie.<br /> Condimentum volutpat morbi facilisis quam scelerisque <br /> sapien. Et, penatibus aliquam amet tellus</p>
              <button className="butin">Explore Menu</button>
            </div>
            <div className="banner-right">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./images/M-unsplash.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/9M-unsplash.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/Y-unsplash.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
          <div className="second-banner">
            <div className="second-banner-left ">
              <p className="para text-end ">About Us</p>
              <p className="third-para text-end ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Quis pharetra  adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet <br /> eu proin mauris et.</p>
              <button className="butin ss">Explore Menu</button>
            </div>
            <div className="second-banner-mid"><img src="./images/knives.png"></img></div>
            <div className="second-banner-right">
              <p className="para  ">Our History</p>
              <p className="third-para  ">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. <br /> Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio <br /> nec aliquet.</p>
              <button className="butin ">Explore Menu</button>
            </div>
          </div>
          <div className="third-banner">
            <p className="text-center mt-2 para-1">Reservation</p>
            <p className="text-center para-2">Book A Table</p>
            <div className=" booking">
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="form-select" aria-label="Default select example">
                <option selected>1 Person</option>
                <option value="1">2 person</option>
                <option value="2">3 person</option>
                <option value="3">more+</option>
              </select>
            </div>
            <div className="book">
              <button className=" butin">Book Now</button>
            </div>
          </div>
          <div className="fourth-banner">
            <div className="para-4 fourth-banner-left"> Refersher</div>
          </div>
          <div className="fifth-banner">
            <p className="para-6 ">Menu That Fits You Palatte</p>
            <p className="para-style text-center">Today's Special</p>

          </div>
          <div className="sixth-banner">
            <div className="sixth-banner-left ">
              <h1 className=" para-6">Fresh juices</h1>
              <h4 className="drinks">Chapel Hill Shiraz <hr className="line"></hr> $56</h4>
              <p className="quantity">AU | Bottle</p>
              <h4 className="drinks">Catena Malbec <hr className="line"></hr> $59</h4>
              <p className="quantity">AR | Bottle</p>
              <h4 className="drinks">La Vieille Rosé <hr className="line"></hr> $56</h4>
              <p className="quantity">FR | 750 ml</p>
              <h4 className="drinks">Rhino Pale Ale <hr className="line"></hr> $44</h4>
              <p className="quantity">CA | 750 ml</p>
              <h4 className="drinks">Irish Guinness <hr className="line"></hr> $56</h4>
              <p className="quantity">IE | 750 ml</p>
            </div>
            <div className="sixth-banner-mid-5 ">
            </div>
            <div className="sixth-banner-right">
              <p className="para-6 ">Cocktails</p>
              <h4 className="drinks">Aperol Spritz<hr className="line"></hr> $56</h4>
              <p className="quantity">Aperol | Villa Marchesi prosecco | soda | 30ml</p>
              <h4 className="drinks">Dark 'N' Stormy <hr className="line"></hr> $59</h4>
              <p className="quantity">Dark rum | Ginger beer | Slice of lime.</p>
              <h4 className="drinks">Daiquiri <hr className="line"></hr> $56</h4>
              <p className="quantity">Rum | Citrus juice | Sugar</p>
              <h4 className="drinks">Old Fashioned <hr className="line"></hr> $44</h4>
              <p className="quantity">Bourbon | Brown sugar | Angostura Bitters</p>
              <h4 className="drinks">Negron <hr className="line"></hr> $56</h4>
              <p className="quantity">Gin | Sweet Vermouth | Campari | Orange garnish</p>
            </div>
          </div>
          <button className="butin-1">View More</button>
          <div className="seventh-banner">
            <div className="seventh-banner-left"><img style={{ height: '90%' }} src='./images/image.png'></img></div>
            <div className="seventh-banner-right">
              <p className="word">Chef's word</p>
              <h4 className="para-style text-fw-bold">What We Believe In</h4>
              <p style={{ width: '500px' }}><img src="./images/vector6.svg" className="coma"></img> Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
              <h4 className="kevin">Kevin Luo</h4>
              <p className="quantity">Chef & Founder</p>
              <img src="./images/kevin-luo.png"></img>
            </div>
          </div>
          <div className="video"><video className="video" controls type="video/mp4" src="./images/pro-video.mp4"></video></div>
          <div className="eight-banner">
<div className="fifth-banner-top">
      <p className="para-10 ">Blogs</p>
      <p className="para-style text-center">Grillmate Updates</p>
    </div>
    <><Carousel className="autoplay" responsive={responsive}>
      <div className="mx-">
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="para-9">The Guide On Food Restaurant To Help You Get Rich</h5>
            <p className="quantity">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="butin-9 btn">Read More</button>
          </div>
        </div>
      </div>

      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/dessert.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="para-9">The Sweet Feel That Relax Your Mind</h5>
            <p className="quantity">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="butin-9 btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/3.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="para-9">15 Things You Need To Know About Food Restaurant</h5>
            <p className="quantity">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="butin-9 btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/bar.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="para-9">Five Easy Way's To Facilitate Food Related Restaurant</h5>
            <p className="quantity">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="butin-9 btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/5.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="para-9">5 Secrect Of Food Restaurant You Don't Know</h5>
            <p className="quantity">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="butin-9 btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/6.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="para-9">How To Make Your Food Photographs Look Asthetic</h5>
            <p className="quantity">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="butin-9 btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/7.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="para-9">Summer Cocktails And Mocktials</h5>
            <p className="quantity">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="butin-9 btn">Read More</button>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="./images/eggs.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p style={{ color: "white" }}>Restaurant / admin</p>
            <h5 className="para-9">Co-Ordination & Teamwork Tips From A south Chef</h5>
            <p className="quantity">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
            <button href="#" className="butin-9 btn">Read More</button>
          </div>
        </div>
      </div>
    </Carousel></>
          </div>

          <div className="third-banner">
            <p className="text-center mt-2 para-1">Newsletter</p>
            <p className="text-center para-2">Subscribe to our Newsletter</p>
            <p className="quantity text-center">And Never Miss An Update</p>
            <div className=" booking-1">
              <input className="style" type="email" placeholder="Email Address"></input>
              <button className=" butin">Subscribe</button>
            </div>
          </div>
          <div className="footer">
            <div className="footer-left text-center">
              <h4 className="para-6">Contact Us</h4>
              <p>9 W 53rd St, New York, NY 10019, USA</p>
              <p>+1 212-344-1230</p>
              <p>+1 212-344-1230</p>
            </div>
            <div className="footer-mid-l ">
              <h4 className="para-12">GRILLMATE</h4>
              <p className="style-1" style={{ width: "80%" }}>“The best way to find yourself is to lose yourself in the service of others.”</p>
              <div className="d-flex justify-content-center icon">
                <i class="bi bi-facebook mx-2"></i>
                <i class="bi bi-instagram mx-2"></i>
                <i class="bi bi-twitter mx-2"></i>
              </div>
            </div>
            <div className="footer-right text-center">
              <p className="para-6">Working Hours</p>
              <p>Monday-Friday:</p>
              <p>08:00 am -12:00 am</p>
              <p>Saturday-Sunday:</p>
              <p>07:00am -11:00 pm</p>
            </div>
          </div>
        </div></></>




  );
};

export default Nav;
