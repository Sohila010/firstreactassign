import React from 'react'
import Footer from '../Footer/Footer'

export default function About() {
    return <>
        <div className="about mt-5">
    <div className="container">
                <h1 className='text-center p-2 fw-bold text-white'>ABOUT COMPONENT</h1>
                <div className="haveline d-flex justify-content-center">
                    <hr className='stylehr' />
                    <i className="fas fa-star p-2 text-white"></i>
                    <hr className='stylehr' />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="content">
                            <p className='p-2 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="content">
                            <p className='p-2 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
            </div>

            </div>
        </div>
        <Footer/>
    </>
    
}
