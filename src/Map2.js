import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { GeoJSON } from 'react-leaflet';
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js';



function Map2() {
    



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
                            <i className="fa fa-bar-chart fa-3x white" />
                            </div>
                                

                                <div className='items'>
                                    <p className='total-earning'>Total Earning</p>
                                    <h6 className='total-earning-number'>540,549</h6>
                                </div>


                            </div>

                            <div className='item'>
                            <div className='icon cyan'>
                            <i className='fab fa-500px fa-3x white' ></i>
                            </div>
                               
                                <div className='items'>
                                    <p className='total-earning'>Sales</p>
                                    <h6 className='total-earning-number'>1,205,677</h6>
                                </div>
                            </div>

                            <div className='item'>

                            <div className='icon orange ' >
                            <i class='fas fa-angle-double-right fa-3x white' ></i>
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
                    
                <div className='bubble-graph'>
                    <h1>Bubble Chart</h1>
                </div>
                    </div>
               
            </div >
            <div className='lower-chart'>
                Lower Chart
            </div>
        <footer>
            footer
        </footer>
        </>

    );
}


export default Map2;