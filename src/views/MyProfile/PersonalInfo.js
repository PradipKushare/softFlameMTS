import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
class PersonalInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        disabledFlag:true,

        firstName:'Pradip',
        middleName:'Balasaheb',
        lastName:'Kushare',
        gender:'Male',
        mobileNo:'8055576553',
        address:'Kothrud,Pune',
        stateName:'Maharashtra',
        city:'Nashik',
        pincode:'422005',
        emailId:'pradipkushare@gmail.com',
        parentEmailId:'nkushare@mail.com',
        parentContactNo:'9022378993',

        birthdate: new Date(),





      };
       this._handleChange            = this._handleChange.bind(this);
       this._editInfo            = this._editInfo.bind(this);
       this.handleChangeBirth            = this.handleChangeBirth.bind(this);

       
    }

_handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
}
_editInfo(evt){
    this.setState({ disabledFlag: false });
}

handleChangeBirth(date){
    this.setState({birthdate: date });
  }

render() {   
    return(  
        <React.Fragment>
             <div className="panel-heading">
              <h3 className="panel-title" style={{display: 'contents'}}> 
                <span>Personal Information</span>
                   <a href="javascript:void(0);" 
                      style={{float:'right',color:'#FFF',fontWeight:'700'}}>
                      <i className="fa fa-pencil-square-o" 
                         onClick={(evt)=>this._editInfo(evt)}></i>
                  </a> 
                </h3>
          </div>
          <div className="panel-body personal-info"> 
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>First Name</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="firstName" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.firstName}/>
                    </span>
                  </div>
              </div>
              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Middle Name</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="middleName" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.middleName}/>
                    </span>
                  </div>
              </div>
              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Last Name</span>
                  </div>

                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="lastName" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.lastName}/>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Gender</span>
                  </div>
                <div className="col-md-6 col-xl-6">
                   <span className="user-gender">
                      <select className={this.state.disabledFlag ? 'profileNoEdit':'form-control'}
                              disabled={this.state.disabledFlag} >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                       </select>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Birthdate</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>

                        <DatePicker
                            selected={this.state.birthdate}
                            onChange={(date)=>this.handleChangeBirth(date)}
                            className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                             disabled={this.state.disabledFlag} />

                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Mobile No</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="mobileNo" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.mobileNo}/>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Address</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="address" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.address}/>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>State</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="stateName" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.stateName}/>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>City</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="city" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.city}/>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Pincode</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="pincode" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.pincode}/>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Email Id</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="emailId" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.emailId}/>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Parent Email Id</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="parentEmailId" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.parentEmailId}/>
                    </span>
                  </div>
              </div>

              <hr />
              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>Parent Contact No</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder="Enter First Name"
                                name="parentContactNo" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.parentContactNo}/>
                    </span>
                  </div>
              </div>

              {!this.state.disabledFlag &&
                <button type="button" className="btn btn-primary" onClick={this._handleSubmit}>Update
             </button>}

          </div>
        </React.Fragment>
          );
        }
    }

export default PersonalInfo;