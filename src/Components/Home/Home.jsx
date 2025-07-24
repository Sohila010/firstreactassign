import React from 'react'
import Footer from '../Footer/Footer'
import avatar from '../../assets/avataaars.svg'

export default function Home() {
  return <>
    <div className='home vh-100 mt-5'>
          <div className="container ">
              <div className="centralize d-flex justify-content-center align-items-center">
              <div className="cover w-25 mt-5 ">
            <img src={avatar} className='w-100' alt="" />
                      <h3 className='text-center p-3 text-white fw-bolder'>start Framework</h3>
                  </div>
                  

              </div>
              <p className='text-center text-white'>Graphic Artist - Web Designer - Illustrator</p>

      </div>
    </div>

<Footer/>
    
  </>
  
}
