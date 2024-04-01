import React,{useState }from 'react';
import Header from './Header';
import Footer from './Footer';
import { Chart as ChartJS } from 'chart.js/auto';
import {Bar } from "react-chartjs-2";
import axios from 'axios';



export default function Histogramme() {
const [dataservers,GetDataServer] = useState([])
  axios
  .get("http://localhost:8088/api/v1/priceMin")
  .then((res) => GetDataServer(res.data))

  return (
    <>
         <div>
         <div className='Container_App'>
            <Header/>
          
            <div className='Container_histogramme'>
            <h1>Histogramme</h1>
                <Bar 
                    data={{
                        labels: ["Prix Minimum","Prix Maximum ","Prix Total"],
                        datasets:[
                            {
                                data : [dataservers[0],dataservers[1], dataservers[2]],
                                backgroundColor:[
                                    "white",
                                ]

                            },
                        ],
                    }}
                />
            </div>
     
        </div>
            <Footer/>
    </div>
           
       
    </>
  )
}