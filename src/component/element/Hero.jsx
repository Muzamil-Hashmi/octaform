import React from 'react'

export default function Hero() {
  return (
    <div className='container-fluid hero mt-5  text-white' >
      <img  className=''  src="assets/bg.png" alt="" style={{position:"absolute ",right:"0px",top:"-180px",width:"70%"}} />
<div className="container mt-5 " style={{position:"relative"}}>
  
  <div className="row">
    <div className="col-md-6 pt-3">

      <h1>Maximize Staking Returns <br />with Auto-Compounding</h1>
      <h3 className='pt-3'>
      Automate your DeFi reinvestment with Octafarm to compound your returns even when you sleep!
      </h3>

      <a  className='btn btn-info w-75 mt-3' href=""> Buy on Pancakeswap</a>
      <p className='mt-3'>
        <code>Official Contract: <br /> 0x04d4F38Dcdfe976Cb325dB16b868F0020104014e</code>
      </p>
      <button type="button" className="btn px-3  btn-outline-info">Launch App</button>
      <button type="button" className="btn ms-3 btn-outline-info">Documentation</button>


    </div>
    <div className="col-md-6" id='col6'>
    <iframe className='mt-5 w-100 h-75'  src="https://www.youtube.com/embed/ouXd5gOMMJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  </div>
  </div>    
  </div>
  )
}
