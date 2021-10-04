import React, { Component } from 'react'
/* eslint-disable */
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForfName = RegExp(/^[a-zA-Z '.-]*$/);
const regForMob=RegExp(/^([+]\d{2})?\d{10}$/);
const regForPass=RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);
class ApplicationForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                fname:null,
                lname:null,
                dob:null,
                email:null,
                mobile:null,
                password:null,
                successmsg:"",
                errmsg:"",
                errors:{
                        fname:"",
                        lname:"",
                        dob:"",
                        email:"",
                        mobile:"",
                        password:"",
                    }
        }
    }
    chngHandler=(e)=>{
        const {name, value} = e.target
        let errors = this.state.errors

        switch(name){
            case "fname":
                errors.fname = regForfName.test(value)? "":"Please enter proper first name";
                break;
            case "lname":
                errors.lname =  regForfName.test(value)? "":"Please enter proper last name";
                break;
            // case "dob":
            //     errors.dob =  regFordate.test(value)? "":"Please enter valid date of birth";
            //     break;
            case 'mobile':
                errors.mobile= regForMob.test(value)?'':' use proper format +91';
                break;
            case 'age':
                errors.age=value<18?'Age should be greater than 18':'';
                break;
            case 'email':
                errors.email=regForEmail.test(value)?'':"Email is not valid example:- abc@gm.com";
                break;
            case 'password':
                errors.password=regForPass.test(value)?'':"Password should contain 1 uppercase, digit , special char and should be 10 characters long";
                break;
        }
        this.setState({errors,[name]:value})
    }
    validate=(errors)=>{
        let valid=true;
        Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
        return valid;
    }
    submit=(e)=>{
        e.preventDefault()

        if(this.validate(this.state.errors)){
            this.setState({successmsg:"Application Submitted Successfully"})
            
            // alert("valid");
        }
        else{
            // alert("invalid");
            this.setState({errmsg:"Failed to Submit"})

        }
    }
    render() {
        const {errors} = this.state;
        
        return (
            
            <div className="formstyle">
                <h1 className="text-center">Application Form</h1>
                <form onSubmit={this.submit} encType="multipart/form-data">
                
                <div className="mb-3">
                        <label htmlFor="fname" className="form-label fw-bold" >First name <span style={{color:"red"}}>*</span></label>
                        <input type="text" name="fname" onChange={this.chngHandler} className="form-control" required id="fname" />
                        {errors.fname.length>0 && <span style={{color:"red"}}>{errors.fname}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label fw-bold">Last name <span style={{color:"red"}}>*</span></label>
                        <input type="text" name="lname" onChange={this.chngHandler} className="form-control" required id="lname" />
                        {errors.lname.length>0 && <span style={{color:"red"}}>{errors.lname}</span>}

                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Date of Birth</label>
                        <input type="date" name="dob" onChange={this.chngHandler} className="form-control"  id="dob" />
                        {errors.dob.length>0 && <span style={{color:"red"}}>{errors.dob}</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address <span style={{color:"red"}}>*</span></label>
                        <input type="email" name="email" onChange={this.chngHandler} className="form-control" required id="email" aria-describedby="emailHelp"/>
                        {errors.email.length>0 && <span style={{color:"red"}}>{errors.email}</span>}

                    </div>
                    <div className="mb-3">
                        <label  className="form-label fw-bold">Mobile <span style={{color:"red"}}>*</span> </label>
                        <input type="number"  name="mobile" onChange={this.chngHandler} required className="form-control" id="mobile"/>
                        {errors.mobile.length>0 && <span style={{color:"red"}}>{errors.mobile}</span>}

                    </div>
                    <div className="mb-3">
                        <label  className="form-label fw-bold">Country</label>
                        <select className="form-select" name="country" id="country">
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="England">England</option>
                            <option value="France">France</option>
                        </select>
                    </div>
                    <label  className="form-label fw-bold">Gender</label>                       

                    <div className="form-check">

                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Male
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Female
                        </label>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Percentage Obtained <span style={{color:"red"}}>Do not put % sign</span> </label>
                        <input type="number" className="form-control" id="perc" />
                    </div>
                    <label  className="form-label fw-bold">Department Choice</label>                       

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                IT
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value=""  />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                HR
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value=""  />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Other
                            </label>
                        </div>
                    <div className="mb-3">
                        <label  className="form-label fw-bold">Password <span style={{color:"red"}}>*</span></label>
                        <input type="password" name="password" required onChange={this.chngHandler} required className="form-control" id="password"/>
                        {errors.password.length>0 && <span style={{color:"red"}}>{errors.password}</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label fw-bold">Enter file</label>
                        <input type="file" className="form-control"  />
                    </div>
                 
                    <button type="submit" className="btn btn-primary">Submit</button> <br /> <br />
               
              
                    {this.validate(this.state.errors)?
                       <div className="alert alert-success" role="alert">
                        
                       {this.state.successmsg}
                   </div>:
                      <div className="alert alert-danger" role="alert">
                        
                      {this.state.errmsg}
                  </div>    
                }
                </form>
         
            </div>
        )
    }
}

export default ApplicationForm
