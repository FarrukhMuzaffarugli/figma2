import React from 'react'
import logo10 from "./suratlar/logo10.svg"
import logo11 from "./suratlar/logo11.svg"
import logo12 from "./suratlar/logo12.svg"
import logo13 from "./suratlar/logo13.svg"
import './footer.css'
const Footer = () => {
  return (
    <div className='end'>
<div className='end1'>
  <div className="end-menu">
    <h1>About the company</h1>
    <p>Buildmax Limited is a professional building, renovation and refurbishment company. We are part of the Nairobi-based Talisman Capital Group.</p>
  </div>
  <div className="end-menu">
<h1>Newsletter</h1>
<p>Stay updated with our lates offers</p>
<button className='menu-btn'>your.address@email.com</button>
<button className='menu-btn1'>Subscribe</button>
  </div>
  <div className="end-menu">
<h1>Follow us</h1>
<div className="dlogo"><div className="endmenulogo">
  <img src={logo10} alt="logo-img" />
 <h6>Buildmax-Ltd</h6>
</div>
<div className="endmenulogo">
<img src={logo11} alt="logo-img" />
<h6>buildmax_ke</h6>
</div>
<div className="endmenulogo">
<img src={logo12} alt="logo-img" />
<h6>buildmax_ltd</h6>
</div>
<div className="endmenulogo">
<img src={logo13} alt="logo-img" />
<h6>Buildmax Limited</h6></div>
</div>
  </div>

</div>

<div className='end2'>
  <div className="end21"><h5>© BuildMax Limited | All Rights Reserved. | 2019</h5></div>
  <div className="end22"><p>Home</p>
  <p>About</p>
  <p>Contact</p>
  <p>Services</p>
  </div>
 


</div>



      </div>
  )
}

export default Footer