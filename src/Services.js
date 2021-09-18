import React, { useState } from 'react'
import serviceapi from './api/serviceapi'

const Services = () => {
  const[servicedata,setServicedata] = useState(serviceapi);
  return (
    <>
      <section className='service-main-container'>
        <div className='container service-container'>
          <h1 className='main-heading text-center fw-bold'>
            How to send Money
          </h1>
          <div className="row">
        {
          serviceapi.map((curntElem)=>{
            const {id,logo,title,info} = curntElem;
            return(
              <>
              <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv'
              >
              <i className={`fontawesome-style ${logo}`}></i>
              <h2 className="sub-heading">{title}</h2>
              <p className='main-hero-para'>{info}</p>
              </div>
              
              </>)
          })
        }
        </div>
        </div>
      </section>
    </>
  )
}

export default Services
