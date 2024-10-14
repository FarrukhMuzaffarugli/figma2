import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import "./figma1.css";
import logo from './suratlar/Vector.svg'
// import "<link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>"
import frame from './suratlar/Frame.svg';
import gamburger from './suratlar/gamburger.svg';
import logo2 from './suratlar/logo2.svg'
import logo3 from './suratlar/logo3.svg'
import logo4 from './suratlar/logo4.svg'
import logo5 from './suratlar/logo5.svg'
import logo6 from './suratlar/logo6.svg'
import logo7 from './suratlar/logo7.svg'

const Figma1 = () => {
  return ( <div>
    <Navbar/>
    <div className='menu1'>
        <div className='menu-nbr'>
           <div className='doira'>
             <div className='doira1'><img src={logo} alt="vector-img" /></div>
             <div className='doira2'><h1> The <span class="yellow">construction</span> kings building up great things</h1></div>
            </div>
            <h6>Buildmax Limited is a professional building, renovation and refurbishment company. We are part of the Nairobi-based Talisman Capital Group.</h6>
            <p>Read More</p>
            <div className="nbrimg"><img src={frame} alt="frame-img" /></div>
            </div>

        <div className="bank">
            <div className="bank-menu">
                <p>Our Projects</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.5 12L17.5 8V11H2.5V13H17.5V16L21.5 12Z" fill="#3D2E09"/>
</svg>
            </div>
        </div>

    </div>
    <div className='menu2'>
<div className='menu2-1'>
    <div className="menu2-1-nav">
        <h1>Since we Started work in 1900</h1>
        <p>Quality design at the fairest price</p>
<img src={gamburger} alt="gam-img" />
    </div>
</div>
<div className='menu2-2'>
  <div className='menu2-2-img'>
    <img src={logo} alt="vector-img"/>
  </div>
  <div className='menu2-2-p'>
  <p>We have worked on some of the stunning architectural marvels within industries like hotels, residential buildings, offices, commercial buildings, food & beverage and made them great successes.</p>

  </div>
  <div className='menu2-2-pp'>
  <p>We have worked on some of the stunning architectural marvels within industries like hotels, residential buildings, offices, commercial buildings, food & beverage and made them great successes.</p>
  </div>
  <div className='menu2-2-ppp'>
    <p>lorem ipsum</p>
  </div>

</div>

    </div>
    <div className='menu3'>
      <div className="menu3-img">
        <img src={logo2} alt="uy-img" />
      </div>
      <div className='menu3-menu'>
        <h1>Aesthetically pleasing.</h1>
        <p>We have worked on some of the stunning architectural marvels within industries like hotels, residential buildings, offices, commercial buildings, food & beverage and made them great successes.</p>
<button>Learn More</button>
      </div>

    </div>
    <div className='menu3'>
      
      <div className='menu3-menu'>
        <h1>Great work Ethic.</h1>
        <p>We have worked on some of the stunning architectural marvels within industries like hotels, residential buildings, offices, commercial buildings, food & beverage and made them great successes.</p>
        <button>Learn More</button>
      </div>
      <div className="menu3-img">
        <img src={logo3} alt="uy1-img" />
      </div>

    </div>
    
    <div className='menu4'>
      <div className="menu4-h">
        <h1>We Provide Below
        Services.</h1>
      </div>
      <div className='menu4-nav'>
      <div className="menu4-img">
        <img src={logo4} alt="logotif"/>
        <h1>Retail-Fit Out &
        Carpentry</h1>
        <p>Lorem ipsum dolor sit 
        amet consect etur.</p>
      </div>
      <div className="menu4-img">
      <img src={logo5} alt="logotif"/>
      <h1>Construction</h1>
      <p>Lorem ipsum dolor sit 
        amet consect etur.</p>
      </div>
      <div className="menu4-img">
      <img src={logo6} alt="logotif"/>
      <h1>interior & space
      planing</h1>
      <p>Lorem ipsum dolor sit 
        amet consect etur.</p>
      </div>
      </div>
      <div className="menu4-h1">
        <h1>Our Latest Projects</h1>
      </div>
      <div className="menu4-footer">
        <div className="menu4-footer-img1">
<div className="menu4ftend">
  <h1>Lawyes Hub
  kenya</h1>
</div>

        </div>
        <div className="menu4-footer-img2">
        <div className="menu4ftend">
          <h1>E.A.C
          Arusha</h1>
        </div>

        </div>
        <div className="menu4-footer-img3">
        <div className="menu4ftend">
          <h1>Transnational 
          Bank</h1>
        </div>

        </div>
      </div>

    </div>

    <div className="menu5">
      <div className="menu5left">
<div className="left-nav">
  <div className="footer-nav">
  <h1>Our Gallery</h1>
  <p>Quality design at the fairest price</p>
  </div>
  <div className="footer-nav1">
    <p>Lorem ipsum dolor sit amet consect 
etur adipiscing elit  sed do eiusmo. 
There are many variations.</p>
  </div>
</div>
<div className="leftnav1">
  <img src={logo7} alt="screen"/>
</div>
      </div>
      <div className='menu5right'>
        <img src={gamburger} alt="rasm" />
      </div>
    </div>
   


    <Footer/>
    </div>
  )
}

export default Figma1