import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Private Sale", 11],
  ["Initial liqidity", 2],
  ["Protocol reward", 2],
  ["Pre Sale  TV", 2],
  ["team and Advisor", 7],
  ["Initial liqidity", 2],
  ["Protocol reward", 2],
  ["Pre Sale  TV", 2],
  ["team and Advisor", 7], // CSS-style declaration
];

export const options = {
  title: "",
  pieHole: 0.4,
  is3D: false,
};


export default function Cercle() {
  return (
    <div className='container-fluid  py-5' id='tab'>
      <div className="container  py-5">

        <div className="row mt-5">

            <div className="col-md-6">

            <Chart className=''
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />

                {/* <img className='w-100 mt-5' src="/assets/btncer.png" alt="" /> */}
           

            </div>
            
            <div className="col-md-6">
                <img className='w-100' src="/assets/tab.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
