import React, { Component } from 'react';
import MTSlogo from '../../assets/img/brand/MTS logo login.png';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

import { CountryDropdown } from 'react-indian-state-region-selector';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link,withRouter } from 'react-router-dom';

import CustomLoader from '../sub_parts/CustomLoader';

import { postRegister } from '../../actions/homepage';
var moment = require('moment');



class Register extends Component {
    constructor(props) {
      super(props);
      this.state ={

        firstName:'',
        lastName:'',
        address:'',
        stateName:'',
        districtName:'',
        pinCode:'',
        mobileNumber:'',
        emailAddress:'',
        password:'',
        confirmPassword:'',
        birthdate: '',
        gender:'male',

        err_firstName:'',
        err_lastName:'',
        err_address:'',
        err_stateName:'',
        err_districtName:'',
        err_pinCode:'',
        err_mobileNumber:'',
        err_emailAddress:'',
        err_password:'',
        err_confirmPassword:'',
        err_birthdate: '',

        myStyle:[],
        err_class :'',
        successMessage:'',
        newBirthDate:'',

     };
       this._handleChange            = this._handleChange.bind(this);
       this._handleValidate       =       this._handleValidate.bind(this);
       this.handleChangeBirth            = this.handleChangeBirth.bind(this);
        this._handleKeyPress        =     this._handleKeyPress.bind(this);
        


    }


   _handleKeyPress(e){
    const re = /[0-9]+/g;
        if (!re.test(e.key)) {
        e.preventDefault();
      }
  }

  _handleChange(evt) {
    var err_firstName = this.state.err_firstName;
    var err_lastName = this.state.err_lastName;
    var err_address = this.state.err_address;
    var err_stateName = this.state.err_stateName;
    var err_pinCode = this.state.err_pinCode;
    var err_mobileNumber = this.state.err_mobileNumber;
    var err_password = this.state.err_password;
    var err_confirmPassword = this.state.err_confirmPassword;
    var err_birthdate = this.state.err_birthdate;
    var err_districtName = this.state.err_districtName;


    if (evt.target.name === 'firstName') {
      err_firstName = '';
    }
    if (evt.target.name === 'lastName') {
      err_lastName = '';
    }
     if (evt.target.name === 'address') {
      err_address = '';
    }
    if (evt.target.name === 'stateName') {
      err_stateName = '';
    }
    if (evt.target.name === 'districtName') {
      err_districtName = '';
    }
    if (evt.target.name === 'pinCode') {
      err_pinCode = '';
    }
     if (evt.target.name === 'mobileNumber') {
      err_mobileNumber = '';
    }
    if (evt.target.name === 'password') {
      err_password = '';
    }
    if (evt.target.name === 'confirmPassword') {
      err_confirmPassword = '';
    }
    if (evt.target.name === 'birthdate') {
      err_birthdate = '';
    }

     this.setState({successMessage:'',myStyle:'',
                    err_class:'', [evt.target.name]:evt.target.value,
                    err_firstName:err_firstName,
                    err_lastName:err_lastName,
                    err_address:err_address,
                    err_stateName:err_stateName,
                    err_pinCode:err_pinCode,
                    err_mobileNumber:err_mobileNumber,
                    err_password:err_password,
                    err_confirmPassword:err_confirmPassword,
                    err_birthdate:err_birthdate,
                    err_districtName:err_districtName
        });
  }

 _handleValidate(evt){
  console.log(this.state.birthdate)
  var err_firstName = '';
  var err_lastName = '';
  var err_address = '';
  var err_stateName = '';
  var err_districtName = '';
  var err_pinCode = '';
  var err_mobileNumber = '';
  var err_emailAddress = '';
  var err_password = '';
  var err_birthdate = '';
  var reWhiteSpace = new RegExp(/^\s+$/);
  var regEmail = /(.+)@(.+){2,}\.(.+){2,}/;

     if (this.state.firstName === '' || reWhiteSpace.test(this.state.firstName) === true) {
      err_firstName = 'Enter your first name';
   }
      if (this.state.lastName === '' || reWhiteSpace.test(this.state.lastName) === true) {
      err_lastName = 'Enter your last name';
   }
      if (this.state.address === '' || reWhiteSpace.test(this.state.address) === true) {
      err_address = 'Enter your address';
   }
      if (this.state.stateName === '' || reWhiteSpace.test(this.state.stateName) === true) {
      err_stateName = 'Please enter your state name';
   }
      if (this.state.districtName === '' || reWhiteSpace.test(this.state.districtName) === true) {
      err_districtName = 'Enter your district name';
   }
      if (this.state.pinCode === '' || this.state.pinCode.length < 6) {
      err_pinCode = 'Enter valid 6 Digit Pincode';
   }
      if (this.state.mobileNumber === '' || this.state.mobileNumber.length < 10) {
      err_mobileNumber = 'Enter valid 10 Digit Pincode';
   }
      if (regEmail.test(this.state.emailAddress) === false){
      err_emailAddress = 'enter valid email address';
   }
      if (this.state.password === '') {
      err_password = 'Please Enter Valid Password';
   }
     if (this.state.birthdate === '' || reWhiteSpace.test(this.state.birthdate) === true) {
      err_birthdate = 'Select your birthdate';
   }

   if (err_firstName || err_lastName || err_address ||
       err_stateName || err_districtName || err_pinCode ||
       err_mobileNumber || err_emailAddress ||
        err_password || err_birthdate !== '') {
      this.setState({ err_firstName:err_firstName,
                      err_lastName:err_lastName,
                      err_address:err_address,
                      err_stateName:err_stateName,
                      err_districtName:err_districtName,
                      err_pinCode:err_pinCode,
                      err_mobileNumber:err_mobileNumber,
                      err_emailAddress:err_emailAddress,
                      err_password:err_password,
                      err_birthdate:err_birthdate });
   }else{
    if (this.state.confirmPassword !== this.state.password) {
      this.setState({ err_confirmPassword:'Recomfirmation password doesn\'t match' });
    }else{
      
       this.setState({ err_confirmPassword:'' });
      this._handleSubmit();
    }
   }
}

_handleSubmit(){
  let that = this;
  let birthdate = moment(this.state.birthdate).format('DD/MM/YYYY');
  let post_data = {
        firstname:this.state.firstName,
        lastname:this.state.lastName,
        address:this.state.address,
        state:this.state.stateName,
        district:this.state.districtName,
        pincode:this.state.pinCode,
        mobile_no:this.state.mobileNumber,
        email:this.state.emailAddress,
        password:this.state.password,
        dob:birthdate,
        gender:this.state.gender,
  }
      that.props.postRegister(post_data).then(response => { 
        if (response.data.success) {
            that.setState({successMessage:response.data.msg,
                           myStyle:{color:'green',margin:'5px'},
                           err_class :'col-md-12 alert alert-success text-center' });
        setTimeout(function(){ 
            that.props.history.push('/login');},
          2000);
        }else{
          that.setState({successMessage:response.data.msg,
                         myStyle:{color:'red',margin:'5px'},
                         err_class :'col-md-12 alert alert-danger text-center' });
        }
      }).catch(function (error) {
        console.log(error);
    });  
}

  selectCountry (val) {
    this.setState({ stateName: val,err_stateName:'' });
  }
 
  handleChangeBirth(dateIs){
    this.setState({birthdate: dateIs,err_birthdate:'' });
  }

  render() {   
    return(  
        <React.Fragment>
           <div className="container">
              <div className="login-content register_form">
                <div className="logo">
                   <span className="logo-default">
                        <img alt="" src={MTSlogo} width="200" />
                    </span> 
                </div>

                    <div className="login-form">  

            {this.state.successMessage &&
              <div className="col-md-12 d-flex justify-content-center" style={this.state.myStyle}>
               <span className={this.state.err_class}>{this.state.successMessage}</span>
            </div>}

                    <div className="form-group row">
                      <div className="col-6">
                       <div className="form-row">
                         <label className="col-sm-4 col-form-label">First Name:</label>
                           <input type="text" 
                                       className="form-control col-sm-8"
                                       placeholder="Enter first name"
                                       name="firstName" 
                                       onChange={(evt) => this._handleChange(evt)} 
                                       value={this.state.firstName}/>
              {this.state.err_firstName && 
                <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_firstName}</span>}
                      </div>
                      </div>

                      <div className="col-6">
                      <div className="form-row">
                         <label className="col-sm-4 col-form-label">Last Name:</label>
                           <input type="text" 
                                       className="form-control col-sm-8"
                                       placeholder="enter last name"
                                       name="lastName" 
                                       onChange={(evt) => this._handleChange(evt)} 
                                       value={this.state.lastName}/>
              {this.state.err_lastName && 
                 <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_lastName}</span>}
                      </div>
                      </div>
                    </div>
                    <hr />

                    <div className="form-group row">
                      <div className="col-6">
                       <div className="form-row">
                         <label className="col-sm-4 col-form-label">Gender:</label>
                          <select className="form-control col-sm-8"
                                  name="gender" 
                                  value={this.state.gender} 
                                  onChange={(evt)=>this._handleChange(evt)} >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                       </select>
                      </div>
                      </div>

                      <div className="col-6">
                      <div className="form-row">
                         <label className="col-sm-4 col-form-label">Date Of Birth:</label>
                          <div className="col-sm-8">
                            <DatePicker
                              selected={this.state.birthdate}
                              placeholderText="Choose birthdate"
                              peekNextMonth
                              showMonthDropdown
                              showYearDropdown
                              onChange={(date)=>this.handleChangeBirth(date)}
                              className="form-control"/>
                          </div>
              {this.state.err_birthdate && 
              <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_birthdate}</span>}
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className="form-group row">
                      <div className="col-6">
                       <div className="form-row">
                         <label className="col-sm-4 col-form-label">Address: </label>
                         <textarea type="text" 
                                   rows="4" 
                                   cols="50"
                                   className="form-control col-sm-8"
                                   placeholder="Enter address here"
                                   name="address" 
                                   onChange={(evt) => this._handleChange(evt)} 
                                   value={this.state.address}/>
              {this.state.err_address && 
                  <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_address}</span>}
                      </div>
                      </div>

                      <div className="col-6">
                      <div className="form-row">
                         <label className="col-sm-4 col-form-label">State:</label>

                         <CountryDropdown
                          value={this.state.stateName}
                          className="form-control col-sm-8"
                          placeholder="Select state belongs"
                          onChange={(val) => this.selectCountry(val)} />
            {this.state.err_stateName && 
                  <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_stateName}</span>}

                      </div>
                      </div>
                    </div>
                    <hr />

                      <CustomLoader loading={false}/>

                    <div className="form-group row">
                      <div className="col-6">
                       <div className="form-row">
                         <label className="col-sm-4 col-form-label">District:</label>
                           <input type="text" 
                                       className="form-control col-sm-8"
                                       placeholder="Enter district name"
                                       name="districtName" 
                                       onChange={(evt) => this._handleChange(evt)} 
                                       value={this.state.districtName}/>
             {this.state.err_districtName && 
                  <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_districtName}</span>}
                      </div>
                      </div>

                      <div className="col-6">
                      <div className="form-row">
                         <label className="col-sm-4 col-form-label">Pincode:</label>
                           <input type="text" 
                                       className="form-control col-sm-8"
                                       placeholder="Enter area pin code"
                                       name="pinCode" 
                                       maxLength="6"
                                       onKeyPress={(evt)=>this._handleKeyPress(evt)} 
                                       onChange={(evt) => this._handleChange(evt)} 
                                       value={this.state.pinCode}/>
      {this.state.err_pinCode && 
            <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_pinCode}</span>}
                      </div>
                      </div>
                    </div>
                    <hr />

                    <div className="form-group row">
                      <div className="col-6">
                       <div className="form-row">
                         <label className="col-sm-4 col-form-label">Mobile No:</label>
                           <input type="text" 
                                       className="form-control col-sm-8"
                                       placeholder="Enter moible number"
                                       name="mobileNumber" 
                                       maxLength="10"
                                       onKeyPress={(evt)=>this._handleKeyPress(evt)} 
                                       onChange={(evt) => this._handleChange(evt)} 
                                       value={this.state.mobileNumber}/>
        {this.state.err_mobileNumber && 
            <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_mobileNumber}</span>}
                      </div>
                      </div>

                      <div className="col-6">
                      <div className="form-row">
                         <label className="col-sm-4 col-form-label">Email:</label>
                           <input type="text" 
                                       className="form-control col-sm-8"
                                       placeholder="Enter email address"
                                       name="emailAddress" 
                                       onChange={(evt) => this._handleChange(evt)} 
                                       value={this.state.emailAddress}/>
      {this.state.err_emailAddress && 
            <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_emailAddress}</span>}
                      </div>
                      </div>
                    </div>
                    <hr />

                    <div className="form-group row">
                      <div className="col-6">
                       <div className="form-row">
                         <label className="col-sm-4 col-form-label">Password:</label>
                           <input type="password" 
                                       className="form-control col-sm-8"
                                       placeholder="Enter strong password"
                                       name="password" 
                                       onChange={(evt) => this._handleChange(evt)} 
                                       value={this.state.password}/>
        {this.state.err_password && 
            <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_password}</span>}
                      </div>
                      </div>

                      <div className="col-6">
                      <div className="form-row">
                         <label className="col-sm-4 col-form-label">Retype Password:</label>
                           <input type="password" 
                                       className="form-control col-sm-8"
                                       placeholder="Type same as above"
                                       name="confirmPassword" 
                                       onChange={(evt) => this._handleChange(evt)} 
                                       value={this.state.confirmPassword}/>
        {this.state.err_confirmPassword && 
            <span className="text-center" style={{color:'red',margin:'3px'}}>{this.state.err_confirmPassword}</span>}
                          </div>
                          </div>
                          </div>
                          <hr />

                        <div className="row" style={{marginTop:'30px'}}>
                          <div className="col-6">
                              <button type="button" className="btn btn-success btn-flat m-b-30 m-t-30" 
                                onClick={(evt)=>this._handleValidate(evt)}>Create Account</button>
                          </div>
                          <div className="col-6">
                            <Link to={'./login'} className="btn btn-flat m-b-30 m-t-30 register_class">Go Login</Link>
                          </div>
                        </div>

                        </div>
                    </div>
                </div>
         </React.Fragment>
          );
        }
    }

  Register.propTypes = {
    postRegister: PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {postRegister})(Register));