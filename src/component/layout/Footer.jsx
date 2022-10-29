import React from 'react'
import {AiFillTwitterCircle,AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    <div className="container-fluid bg-transparent text-white   mt-5 ">
    <div className="container " id='foot'>


      <div className="row">

        <div className=" col-6 col-md-3   ">

<h6 className='tag fw-bold'>Company</h6>

<p>Bug Bounty</p>


<p>Jobs/Career</p>

        </div>
        <div className="col-6 col-md-3  ">

<h6 className='tag fw-bold'>Developer</h6>

<p>Octa Farm Documentation</p>


<p>Explore Github</p>

        </div>
        <div className="col-6 col-md-3  ">

<h6 className='tag fw-bold'>COMMUNITY</h6>

<p>Telegram</p>


<p>Blog</p>

        </div>
        
        <div className="col-6 col-md-3 ">

<h6 className='tag fw-bold'>LEGAL</h6>

<p>Privacy & Terms</p>




        </div>
<hr />
<div className="row">

  <div className="col-md-4 ">

  <a className="navbar-brand" href="#"><img src="assets/footlogo.png" alt=" "width={200} /></a>

  </div> 
 
  <div className="col-md-6">
  <div className='style9 '>© 2022 Quant Network Limited. All rights reserved</div>
  </div>
  <div className="col-md-2">
    <div>
<AiFillTwitterCircle size={30} color="aqua" />
<AiFillLinkedin size={30} color="aqua"/>
<AiOutlineWhatsApp size={30} color="aqua" />
<AiOutlineInstagram size={30} color="aqua"/>
</div>

  </div>
 


</div>
      </div>
    </div>
    </div>
  )
}

export default Footer
