import React from "react";
import { SiBinance ,SiPolymerproject ,SiYourtraveldottv} from "react-icons/si";
import  {GiEvilMoon } from "react-icons/gi"

export default function Gateway() {
  return (
    <div>
      <div className="container text-white mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4>EASIEST GATEWAY TO</h4>
            <h1>Cross-Chain Yield Farming For All</h1>
            <p>
              Octafarm will be deployed on various blockchain networks so anyone
              can access supercharged <br /> yields seamlessly cross-chain,
              thereby maximizing opportunities to access the highest yields.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <div className="d-flex  mt-4">
              <h5 className="me-2 ">BINANCE</h5>
              <SiBinance className="ms-4" color="yellow" size={30} />
            </div>

            <div className="d-flex mt-5  pt-3">
              <h5 className="me-2">Polygon</h5>
              <SiPolymerproject className="ms-5" color="purple" size={30} />
            </div>
            <div className="d-flex  mt-5 pt-5">
              <h5 className="me-2">Moonbeam</h5>
              <GiEvilMoon className="ms-3" color="pink" size={30} />
            </div>
            <div className="d-flex  mt-5 pt-3">
              <h5 className="me-2">Avalanche</h5>
              <SiYourtraveldottv className="ms-3" color="orange" size={30} />
            </div>
          </div>
          <div className="col-md-1 leg1"></div>
          <div className="col-md-3 pe-5 mt-5 py-5">

            <img className=" " src="/assets/octa.png" alt="" style={{width:"300px"}} />
          </div>
          <div className="col-md-1 leg2">


          </div>

          <div className="col-md-2 mt-5 text-decoration-none">
            <ul>
              <li className="link py-2  border-start px-3  border-3">
                PancakeSwap
              </li>
              <li className="link py-2 mt-5 border-start px-3  border-3">
                QuickSwap 
              </li>
              <li className="link py-2 mt-5 border-start px-3  border-3">
                SolarBeam 
              </li>
              <li className="link py-2 mt-5 border-start px-3  border-3">
                Trader Joe 
              </li>
            </ul>
          </div>
          <div className="col-md-1 leg3">

          </div>

          <div className="col-md-2 mt-4 pt-1 text-decoration-none">
            <ul>
              <li className=" link py-2 mt-5 border-start px-3  border-3">
                PancakeSwap 
              </li>
              <li className="link py-2 mt-5 border-start px-3  border-3">
                QuickSwap
              </li>
              <li className="link py-2 mt-5 border-start px-3  border-3">
                SolarBeam
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div
              className="card text-light text-center bg-transparent border-primary mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <h4>Private Sale</h4>
                <p>13th jan, 2022</p>

                <h5 className="card-title display-3 fw-bold">7%</h5>
                <p className="card-text"> Allocation: 1.5% Tokens</p>
                <p> Price: 1 BNB ≈ 691.93 OCTF</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card text-light text-center bg-transparent border-primary mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <h4>Pre Sale</h4>
                <p> 15th Jan, 2022 @ PinkSale </p>
                <h5 className="card-title display-3 fw-bold">3%</h5>
                <b>Allocation: 10% Tokens</b>
                <br />

                <b>Price 1 BNB ≈ 666.66 OCTF</b>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card text-light bg-transparent text-center border-primary mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <h4>LISTING</h4>

                <p>PancakeSwap</p>
                <h5 className="card-title display-3 fw-bold">0.75%</h5>
                <b>Allocation: 10% Tokens</b>
                <br />

                <b>Price 1 BNB ≈ 666.66 OCTF</b>
                <a href="" className="btn btn-info px-5 mt-2">
                  BUY OCTF{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row fw-bold mt-5">
          <h1>Token Allocation</h1>

          <div className="col-md-3 mt-4">
            <div className="text-center">
              <p>Ticker</p>
              <h1 className="text-info">OCTF</h1>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="text-center">
              <p>Network</p>
              <h1 className="text-info">BSC</h1>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="text-center">
              <p>Emission</p>
              <h1 className="text-info">2 Years</h1>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="text-center">
              <p>Total Fixed Supply</p>
              <h1 className="text-info">10 Million</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
