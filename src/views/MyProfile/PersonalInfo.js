import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Link, Route, Redirect,Switch,withRouter } from 'react-router-dom';
import {getProfileInfo, postProfileInfo } from '../../actions/homepage';
import "react-datepicker/dist/react-datepicker.css"; 
import { CountryDropdown } from 'react-indian-state-region-selector';

var moment = require('moment');


class PersonalInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        disabledFlag:true,
        firstname:'',
        middlename:'',
        lastname:'',
        gender:'',
        mobile_no:'',
        address:'',
        state:'',
        city:'',
        pincode:'',
        email:'',
        parentemail:'',
        parentcontact:'',
        dob:'',
        successMessage:'',
        myStyle:[],
        err_class:'',
        err_email:'',
      };

       this._handleChange            =    this._handleChange.bind(this);
       this._editInfo                =    this._editInfo.bind(this);
       this.handleChangeBirth        =    this.handleChangeBirth.bind(this);
       this._handleSubmit            =    this._handleSubmit.bind(this); 
       this._handleKeyPress        =     this._handleKeyPress.bind(this);
       this._getProfileInfo        =     this._getProfileInfo.bind(this); 
 }

_getProfileInfo(){
  let that = this;
    this.props.getProfileInfo().then(response => { 
      if (response.data.success) {
        //let dob = moment(response.data.data.dob).format('DD/MM/YYYY');
            that.setState({
                  firstname:response.data.data.firstname, 
                  lastname:response.data.data.lastname,
                  gender:response.data.data.gender,
                  dob:new Date(),
                  address:response.data.data.address,
                  state:response.data.data.state,
                  pincode:response.data.data.pincode,
                  mobile_no:response.data.data.mobile_no,
                  city:response.data.data.city,
                  email:response.data.data.email,
                  password:response.data.data.password, 
                  middlename:response.data.data.middlename,
                  parentemail:response.data.data.parentemail,
                  parentcontact:response.data.data.parentcontact })
          }
       }).catch(function (error) {
        console.log(error);
    });
}

_handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
}
_editInfo(evt){
    this.setState({ disabledFlag: !this.state.disabledFlag });
}

handleChangeBirth(date){
    this.setState({dob: date });
  }

   _handleKeyPress(e){
    const re = /[0-9]+/g;
        if (!re.test(e.key)) {
        e.preventDefault();
      }
  }

_handleSubmit(){
  var regEmail = /(.+)@(.+){2,}\.(.+){2,}/;
    if (regEmail.test(this.state.email) == false || regEmail.test(this.state.parentemail) == false){
       this.setState({ err_email : 'enter valid email address' }); 
    }else{
      let that = this;
      let dob = moment(this.state.dob).format('DD/MM/YYYY');

      let post_data = {
        firstname:this.state.firstname, 
        lastname:this.state.lastname,
        gender:this.state.gender,
        dob:dob,
        address:this.state.address,
        state:this.state.state,
        pincode:this.state.pincode,
        mobile_no:this.state.mobile_no,
        email:this.state.email,
        password:this.state.password, 
        middlename:this.state.middlename,
        parentemail:this.state.parentemail,
        parentcontact:this.state.parentcontact,
        city:this.state.city,
        sess_user_id:localStorage.getItem('sess_user_id')
  }

      that.props.postProfileInfo(post_data).then(response => { 
        if (response.data.success) {
            that.setState({successMessage:response.data.msg,
                           myStyle:{color:'green',margin:'5px'},
                           err_class :'col-md-12 alert alert-success text-center' });
          setTimeout(function(){ 
               window.scrollTo(0, 0); },
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
}

componentDidMount() {
  this._getProfileInfo();
}

  selectCountry (val) {
    this.setState({ state: val });
  }

render() {   
  let { getUserData } = this.state;

  console.log(getUserData)

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

          {this.state.successMessage &&
            <div className="col-md-12 d-flex justify-content-center" style={this.state.myStyle}>
             <span className={this.state.err_class}>{this.state.successMessage}</span>
          </div>}

              <div className="row">
                  <div className="col-md-6 col-xl-6">
                      <span>First Name</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>
                         <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder={this.state.firstname ? 'Enter First Name' : '__'}
                                name="firstname" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.firstname}/>
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
                                placeholder={this.state.middlename ? 'Enter middle name' : '__'}
                                name="middlename" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.middlename}/>
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
                                className={this.state.disabledFlag ? 'profileNoEdit': 'form-control'} 
                                placeholder={this.state.lastname ? 'Enter last name' : '__' }
                                name="lastname" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.lastname}/>
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
                      <span>dob</span>
                  </div>
                  <div className="col-md-6 col-xl-6">
                       <span>

                        <DatePicker
                            selected={this.state.dob}
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
                                placeholder={this.state.mobile_no ? 'Enter mobile number' : '__'}
                                name="mobile_no" 
                                maxLength="10"
                                disabled={this.state.disabledFlag}
                                onKeyPress={(evt)=>this._handleKeyPress(evt)} 
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.mobile_no}/>
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
                      <textarea type="text" 
                                rows="3" 
                                cols="50"
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder={this.state.address ? 'Enter your address' : '__'}
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
                       <span className="profile_states">

                        {!this.state.disabledFlag &&
                       <div className="form-row">
                         <CountryDropdown
                            value={this.state.state}
                            disabled={this.state.disabledFlag}
                            onChange={(val) => this.selectCountry(val)} />
                           </div>}
                           
                           {this.state.disabledFlag &&
                          <input type="text" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder={this.state.state ? 'Select your state' : '__'}
                                name="state" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.state}/>}

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
                                placeholder={this.state.city ? 'Enter your city' : '__'}
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
                                placeholder={this.state.pincode ? 'Enter pincode here' : '__'}
                                name="pincode" 
                                maxLength="6"
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                onKeyPress={(evt)=>this._handleKeyPress(evt)} 
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
                                placeholder={this.state.email ? 'Enter email address' : '__'}
                                name="email" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.email}/>
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
                         <input type="email" 
                                className={this.state.disabledFlag ? 'profileNoEdit':'form-control'} 
                                placeholder={this.state.parentemail ? 'Enter parent email id' : '__'}
                                name="parentemail" 
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.parentemail}/>
                    </span>

                    {this.state.err_email && 
                      <span className="text-center" style={{color:'red',margin:'3px'}}>
                          {this.state.err_email}
                      </span>}

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
                                placeholder={this.state.parentcontact ? 'Enter parent phone number' : '__'}
                                name="parentcontact" 
                                maxLength="10"
                                disabled={this.state.disabledFlag}
                                onChange={(evt) => this._handleChange(evt)} 
                                onKeyPress={(evt)=>this._handleKeyPress(evt)} 
                                value={this.state.parentcontact}/>
                    </span>
                  </div>
              </div>

              {!this.state.disabledFlag &&
                <span className="text-center" style={{ display:'grid',margin:'10px'}}>
                <button type="button" className="btn btn-primary" onClick={this._handleSubmit}>Update
             </button>
             </span>}

          </div>
        </React.Fragment>
          );
        }
    }

  PersonalInfo.propTypes = {
      postProfileInfo: PropTypes.func.isRequired,
      getProfileInfo:PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {postProfileInfo,getProfileInfo})(PersonalInfo));