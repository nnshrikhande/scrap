import React, { useState } from 'react';
// import React from 'react'
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom';
//import web from "../src/Images/cont.jpg";


//  var sectionStyle = {
//      backgroundImage: `url(${web})`,
//      backgroundRepeat: 'no-repeat',
//      backgroundSize: 'cover', 

//    }




class Contact extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
               fullname: "",
               phone: "",
                email: "",
            },

        };
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;

        switch (name) {
            case "fullname":
                errors.fullname = value.length < 5 ? "Full Name must be 5 characters length" : "";
                break;

            case "phone":
                errors.phone = value.length  !=10 ? "Phone Number must be 10  Numbers" : "";
                break;

            case "email":
                errors.email = value.length < 5 ? "Email must be 5 characters length" : "";

                let apos = value.indexOf('@');
                let dotpos = value.lastIndexOf('.');

                if (apos < 1 || dotpos - apos < 2) {
                    errors.email = "please enter valid Email Id"
                }
                break;

            default:
                break;
        }

        // console.log(this.state)
        this.setState({ errors, [name]: value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        if(
            this.state.errors.fullname.length === 0 &&  this.state.errors.phone.length ===0 &&
            this.state.errors.email.length === 0
        )
        {
            alert("From is Valid");
        }
        else{
            alert("From is not Valid");
        }
    }

   render (){
    const { errors } = this.state;


  
    return (<>

<div style={{backgroundColor:"black"}}> 
 <Navbar /> 

        <section id="header" className="d-flex align-items-center"  >
            <div className="container-fluid nav_bg" >

                <div className="row">
                    {/* <div className="row-6"></div> */}
                    {/* <div className="col-10  mx-auto"> */}
                    {/* <div className="row"> */}


                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" style={{ margin: "top-30px" }}
                    >
                       
                            <h5 className="my-3" style={{ textAlign: "center" }}>
                                <strong className="brand-name" style={{ color: "#F8F9F9" }}>Address:<br></br>
                              COVAX, Mumbai <br></br>
                              Raintree Marg, Near Bharati Vidyapeeth,<br />
                              Opp. Kharghar Railway Station, Sector 7, <br />
                              CBD Belapur Navi Mumbai - 400 614. Maharashtra.<br />
                              Contact: +91 7588821147 <br />
                              Email: covax@gmail.com</strong>
                            </h5>

                    </div>
                    <div className="col-md-6 order-1 order-lg-2 ">

                        <div className="container contact_div">
                            <div className="row">
                                <div className="col-md-6 col-6 mx-auto">
                                    <form onSubmit={this.submitHandler}>

                                        <div class="mb-3" style={{ color: "#F8F9F9"}}>
                                            <label for="validationDefault01" class="form-label">Full Name</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name Here" required
                                                name="fullname"
                                               
                                                onChange={this.changeHandler}

                                                placeholder="Please Enter Your Full Name" />
                                                <p style={{color:"red"}}>{errors.fullname}</p>

                                        </div>

                                        <div class="mb-3" style={{ color: "#F8F9F9" }}>
                                            <label for="validationDefault01" class="form-label">Contact Number</label>
                                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Contact No Here" required
                                                name="phone"
                                               
                                                onChange={this.changeHandler}
                                                placeholder="Please Enter Your Valid Number" />
                                                <p style={{color:"red"}}>{errors.phone}</p>

                                        </div>

                                        <div class="mb-3" style={{ color: "#F8F9F9" }}>
                                            <label for="validationDefault01" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email Here" required
                                                name="email"
                                               
                                                onChange={this.changeHandler}
                                                placeholder="name@example.com" />
                                                <p style={{color:"red"}}>{errors.email}</p>

                                        </div>
                                        <div class="mb-3" style={{ color: "#F8F9F9" }}>
                                            <label for="validationDefault01" class="form-label">Message</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message Here" required
                                                name="msg"
                                             
                                                onChange={InputEvent}>

                                            </textarea>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary" type="submit">Submit</button>

                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
             
            {/* </div>  */}


        </section>
        </div>
    </>

    );
}
};

export default Contact;