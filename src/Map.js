import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { GeoJSON } from 'react-leaflet';
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js';



function Map1() {
   // const [geo, setGeo] = useState();
   // const [x, setX] = useState(true);
  //  const fetchData = async () => {
      //  let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=22.9734&longitude=78.6569&maxradiuskm=2000`;


      //  let response = await fetch(url);
     //   let info = await response.json();
      //  let array = info[`features`];
        //console.log(info);
        //setGeo(array);
        //  console.log(array)

 //   }



    //  useEffect(() => {
    //      fetchData();
    //  }, [])
    return (

        <>
            <div className='map-page'>
                <div className='side-menu'>
                    <h2 className='name'>WSTF FRONT-END HACKATHON</h2>
                    <div>
                        <span className='users'>All Users</span> <span className='user-details'>Details</span>
                        <h1 className='number'>2,431,340</h1>

                        <div className='icons-container'>
                            <div className='item'>
                            <div className='icon purple'>
                            <i className="fa fa-bar-chart  white" />
                            </div>
                                

                                <div className='items'>
                                    <p className='total-earning'>Total Earning</p>
                                    <h6 className='total-earning-number'>540,549</h6>
                                </div>


                            </div>

                            <div className='item'>
                            <div className='icon cyan'>
                            <i className='fab fa-500px  white' ></i>
                            </div>
                               
                                <div className='items'>
                                    <p className='total-earning'>Sales</p>
                                    <h6 className='total-earning-number'>1,205,677</h6>
                                </div>
                            </div>

                            <div className='item'>

                            <div className='icon orange ' >
                            <i class='fas fa-angle-double-right  white' ></i>
                            </div>
                                
                                <div className='items'>
                                    <p className='total-earning'>Purchase</p>
                                    <h6 className='total-earning-number'>48,430,039</h6>
                                </div>
                            </div>

                        </div>

                        <div className='active-users-block'>
                            <div className='flex'>
                                <div className='circle'>27%</div>
                                <div className='col'>
                                <p className='active-number'>12345</p>
                                <p className='active-user' >Active uers</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='circle'>30%</div>
                                <div className='col'>
                                <p className='active'>12345</p>
                                <p>new Users</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                    <div className='map-container'>
                    <MapContainer center={[20.5937, 78.9629]} zoom={2.5} scrollWheelZoom={0} style={{ height: '700px', width: '80vw' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            London
                        </Popup>
                    </Marker>
                    <Marker position={[48.8566, 2.3522]} >
                        <Popup >
                            Paris
                        </Popup>
                    </Marker>

                    <Marker position={[28.7041, 77.1025]} >
                        <Popup >
                            Delhi
                        </Popup>
                    </Marker>

                    <Marker position={[35.8617, 104.1954]} >
                        <Popup >
                            China
                        </Popup>
                    </Marker>

                    <Marker position={[95.7129, 37.0902]} >
                        <Popup >
                            United States
                        </Popup>
                    </Marker>
                </MapContainer>
                    </div>
               
            </div >
            <div className='lower-chart'>
                Lower Chart
            </div>
    
        </>

    );
}


export default Map1