import React, {Fragment} from 'react';


function Header() {
    return(
      <Fragment>
        <header id="header">
          <div class="container">
           
          {/* <!-- ======= Header ======= --> */}
    <header id="header">
      <div class="d-flex flex-column">
        {/* <!-- circle profile --> */}
        <div class="profile">
          <img
            src="assets/img/tica.jpg"
            alt=""
            class="img-fluid rounded-circle"
          />
          <h1 class="text-light"><a href="index.html">a.k.a †!CA</a></h1>
          <div class="social-links mt-3 text-center">
            <a href="https://twitter.com/IamTicaRey" class="twitter"><i class="bx bxl-twitter"></i></a>
            {/* <!-- <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a> --> */}
            <a href="https://www.instagram.com/ticarey/" class="instagram"><i class="bx bxl-instagram"></i></a>
            {/* <!-- <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> --> */}
            <a href="https://www.linkedin.com/in/jessi-chavez-aka-tica-rey-33270231/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>

        <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" class="nav-link scrollto active"
                ><i class="bx bx-home"></i> <span>Home</span></a
              >
            </li>
            <li>
              <a href="#about" class="nav-link scrollto"
                ><i class="bx bx-user"></i> <span>About</span></a
              >
            </li>
            <li>
              <a href="#resume" class="nav-link scrollto"
                ><i class="bx bx-file-blank"></i> <span>Resume</span></a
              >
            </li>
            <li>
              <a href="#portfolio" class="nav-link scrollto"
                ><i class="bx bx-book-content"></i> <span>Portfolio</span></a
              >
            </li>
            <li>
              <a href="#services" class="nav-link scrollto"
                ><i class="bx bx-server"></i> <span>Services</span></a
              >
            </li>
            <li>
              <a href="#contact" class="nav-link scrollto"
                ><i class="bx bx-envelope"></i> <span>Contact</span></a
              >
            </li>
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}
      </div>
    </header>
    {/* <!-- End Header --> */}

    {/* <!-- ======= Hero Section ======= --> */}
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container" data-aos="fade-in">
        <h1>Jessica Chavez</h1>
        <p>
          I'm
          <span
            class="typed"
            data-typed-items="a Software Engineer, a Developer, Architecting and Designing, Branding"
          ></span>
        </p>
      </div>
    </section>
    {/* <!-- End Hero --> */}

        </div>
      </header>
      </Fragment>
    )
}

export default Header;