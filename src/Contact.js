import React, { useState } from 'react'

const Contact = () => {
    const [userdata, setUserdata] = useState({
        firstName: " ",
        lastName: " ",
        phone: " ",
        email: " ",
        address: " ",
        message: " "
    });
    let name,value;
    const postUserdata = (e) => {
     name=e.target.name;
     value=e.target.value;
     setUserdata({...userdata,[name]:value})
     }
    // console.log(userdata);

    // Connect with firebase
     const submitdata=async(e)=>{
      e.preventDefault();
      const{firstName,lastName,phone,email,address,message} = userdata;
      if(firstName && lastName && phone && email && address && message ){
        const res = await fetch('https://websitewithfirebase0-default-rtdb.firebaseio.com/userDataRecords.json',
        {
       method:"POST",
       headers:{
           "Content-Type":"application/json",
       },
       body:JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        address,
        message
       }),
        }
        );
        if(res){
            setUserdata({
        firstName: " ",
        lastName: " ",
        phone: " ",
        email: " ",
        address: " ",
        message: " "
            });
            alert("Data stored successfully")
        }
        else{
            alert("Please store the data")
        }
        
        }
        else{
            alert("Please fill the data")
      }
      
     }
    return (
        <>
            <section className="contactus-section">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='contact-leftside col-12 col-lg-5'>
                                    <h1 className="main-heading fw-bold">
                                        Connect With Our <br /> Sales Team.
                                    </h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img src='https://i.pinimg.com/564x/77/5a/b8/775ab8f7dcb36967199e17b6a02b5a9b.jpg' alt='image' className='img-fluid' />
                                    </figure>
                                </div>
                                {/* right side contact form  */}
                                <div className='contact-rightside col-12 col-lg-7'>
                                    <form method='POST'>
                                        <div className='row'>

                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input type='text' 
                                                name='firstName' 
                                                className='form-control' 
                                                value={userdata.firstName}
                                                 onChange={postUserdata} 
                                                 placeholder='First name' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input type='text'
                                                 name='lastName' 
                                                 className='form-control'
                                                  value={userdata.lastName}
                                                   onChange={postUserdata} 
                                                   placeholder='Last name' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6  contact-input-feild'>
                                                <input type='text' 
                                                name='phone' 
                                                className='form-control' 
                                                value={userdata.phone} 
                                                onChange={postUserdata} 
                                                placeholder='Mobile Number' />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-feild'>
                                                <input type='text' 
                                                name='email'
                                                 className='form-control'
                                                  value={userdata.email}
                                                   onChange={postUserdata} 
                                                   placeholder='Email Address' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id=""
                                                    value={userdata.address}
                                                    onChange={postUserdata}
                                                    className="form-control"
                                                    placeholder=" Address" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <input
                                                    type="text"
                                                    name="message"
                                                    id=""
                                                    value={userdata.message}
                                                    onChange={postUserdata}
                                                    className="form-control"
                                                    placeholder="Enter Your Message" />
                                            </div>
                                        </div><div class="form-check form-checkbox-style">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label
                                                class="form-check-label"
                                                className="main-hero-para">
                                                I agree that the ShahSahab may contact me at the
                                                email address or phone number above
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            onClick={submitdata}
                                            className="btn btn-style w-100"
                                            >Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
