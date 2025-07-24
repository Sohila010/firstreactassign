import React from 'react'
import Footer from '../Footer/Footer'

export default function Contact() {
    return <>
        <div className="contact mb-4 ">
            <div className="container">
                <h1 className='text-center p-2 fw-bold '>ABOUT COMPONENT</h1>
                <div className="haveline d-flex justify-content-center mb-3">
                    <hr className='stylehrdark' />
                    <i className="fas fa-star p-2"></i>
                    <hr className='stylehrdark' />
                    </div>
                <div className="inputfields d-flex flex-column justify-content-start align-items-center p-2">
                    <input type="text" className='border-0 border-bottom border-dark-subtle w-50 mb-4 py-2 px-1 my-input'
                        placeholder='UserName' />
                    
                    <input type="number" className='border-0 border-bottom border-dark-subtle w-50 mb-4 py-2 px-1 my-input' placeholder='User Age' />
                    <input type="email" className='border-0 border-bottom border-dark-subtle w-50 mb-4  py-2 px-1 my-input' placeholder='User Email' />
                    <input type="password" className='border-0 border-bottom border-dark-subtle w-50 py-2 px-1 my-input' placeholder='User Password' />
               
               
                    <button className='rounded-3 px-5 align-self-center mt-3 btnbg'>send</button>
                </div>
        
            </div>
       
        </div>
        <Footer />
    </>
  
}
