import React from 'react'
import img from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import Footer from '../Footer/Footer'

export default function Protifolio() {
  return <>
    <div className="protodolio p-5 mt-5">
      <div className="container">
        <h1 className='text-center p-2 fw-bold text-capitalize '>portfolio component</h1>
        <div className="haveline d-flex justify-content-center mb-3">
          <hr className='stylehrdark' />
          <i className="fas fa-star p-2"></i>
          <hr className='stylehrdark' />
        </div>
        <div className="row gy-3 p-2">
          <div className="col-md-4 px-4">
            <div className="item position-relative overflow-hidden">
              <img src={img} className='w-100 rounded-4' alt="" />

              <div className="layer position-absolute d-flex justify-content-center align-items-center rounded-4">
                <i className="fa-solid fa-plus fw-bolder text-white"></i>
              </div>
        </div>
          </div>
          <div className="col-md-4 px-4">
            <div className="item position-relative overflow-hidden">
              <img src={img2} className='w-100 rounded-4' alt="" />
              <div className="layer position-absolute d-flex justify-content-center align-items-center rounded-4">
                <i className="fa-solid fa-plus fw-bolder text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-4 ">
            <div className="item position-relative overflow-hidden">
              <img src={img3} className='w-100 rounded-4' alt="" />
              <div className="layer position-absolute d-flex justify-content-center align-items-center rounded-4">
                <i className="fa-solid fa-plus fw-bolder text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-4">
            <div className="item position-relative overflow-hidden">
              <img src={img} className='w-100 rounded-4' alt="" />
              <div className="layer position-absolute d-flex justify-content-center align-items-center rounded-4">
                <i className="fa-solid fa-plus fw-bolder text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-4">
            <div className="item position-relative overflow-hidden">
              <img src={img2} className='w-100 rounded-4' alt="" />
              <div className="layer position-absolute d-flex justify-content-center align-items-center rounded-4">
                <i className="fa-solid fa-plus fw-bolder text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-4">
            <div className="item position-relative overflow-hidden">
              <img src={img3} className='w-100 rounded-4' alt="" />
              <div className="layer position-absolute d-flex justify-content-center align-items-center rounded-4">
                <i className="fa-solid fa-plus fw-bolder text-white"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
  </>
}
