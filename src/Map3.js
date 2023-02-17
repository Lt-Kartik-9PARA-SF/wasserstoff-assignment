import React from 'react'

function Map3() {
    return (
        <>
        <h4 className='design'>Design Faster</h4>
        <div className='p3-container'>
        
            <div className='p3-side-bar'>

                <div className='p3-white-box'>
                    <div className='circle2'></div>
                    <div className='b1'>
                        <p className='p3-total-earning'>Total earning</p>
                        <h5 className='p3-number'> $12,875</h5>
                        <p className='p3-some-text'>Compared to $21,504 last year</p>
                    </div>

                    <div className='b2'>
                        <p><span className='presentation'>Presentation</span> <span className='pre-span'>862</span></p>
                        <p> <span className='presentation'>Development</span> <span className='pre-span'>862</span></p>
                        <p><span className='presentation'>Research</span> <span className='pre-span'>862</span></p>
                    </div>

                </div>

                <div className='blue-box'>
                    <h4 className='blue-box-text'>$12,875</h4>
                    <p className='blue-box-small-text'>Compared to $21,490 last year</p>
                    <hr></hr>
                    <h4 className='blue-box-text'>$43,123</h4>
                    <p className='blue-box-small-text'>Compared to $21,490 last year</p>

                </div>

                <div className='p3-white-box-2'>
                    <p>
                        <span className='white-box-2-span1'>Travel</span> <span className='white-box-2-span2'>760</span> <span className='white-box-2-span3'>2,5400</span>
                    </p>
                    <p>
                        <span className='white-box-2-span1'>Presentation</span> <span className='white-box-2-span2'>612</span> <span className='white-box-2-span3'>2,5400</span>
                    </p>
                    <p>
                        <span className='white-box-2-span1'>Business</span> <span className='white-box-2-span2'>607</span> <span className='white-box-2-span3'>2,5400</span>
                    </p>
                </div>

            </div>


            <div className='side-2'>
                <h1>Bubble Chart</h1>
            </div>
        </div>
        </>
    )
}

export default Map3