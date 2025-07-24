import React from 'react'


export default function Footer() {
    return <>
        <div className="foot p-5">
            <div className="container pb-5 mb-3">
                <div className="row">

                    <div className="col-md-4">
                        <div className="content">
                            <h2 >Location</h2>
                            <h6>2215 John Daniel Drive</h6>
                            <h6>Clark, MO 65243</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content p-2">
                            <h2>AROUND THE WEB</h2>
                            <div className="icons text-white">
                                <i className="fab fa-facebook-f p-3 border border-1 rounded-5 me-2"></i>
                                <i className="fab fa-twitter p-3 border border-1 rounded-5 me-2"></i>
                                <i className="fab fa-linkedin-in p-3 border border-1 rounded-5 me-2"></i>
                                <i className="fas fa-globe p-3 border border-1 rounded-5"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content p-2">
                            <h2>ABOUT FREELANCER</h2>
                            <h6>Freelance is a free to use, licensed Bootstrap</h6>
                            <h6>theme created by Route</h6>
                        </div>
                    </div>




                </div>

            
            
            </div>
            {/* <div className="copyright mt-2 p-2 "> */}
                {/* <h5 className='text-center'>Copyright © Your Website 2021</h5> */}
            {/* </div> */}
        </div>
        
        
        <div className="copyright p-2 ">
            <h5 className='text-center text-white'>Copyright © Your Website 2021</h5>
        </div>

    </>
}
