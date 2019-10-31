import React, { Component } from 'react';
import MTSlogo from '../../assets/img/brand/MTS logo login.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Link, Route, Redirect,Switch,withRouter } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

import { postLogin } from '../../actions/homepage';

import CustomLoader from '../sub_parts/CustomLoader';

var configPath = require('../config.js');
var recaptcha_siteKey = configPath.recaptcha_siteKey;
var recaptcha_secreatKey = configPath.recaptcha_secreatKey;

class Login extends Component {
    constructor(props) {
      super(props);
      this.state ={
        emailAddress:'',
        password:'',
        err_emailAddress:'',
        err_password:'',
        err_captchaState:'',

        myStyle:[],
        err_class :'',
        successMessage:'',
        captchaState:'',

        loading:false,

     };
       this._handleChange            = this._handleChange.bind(this);
       this._handleValidate       =       this._handleValidate.bind(this);
        this.onChange        =     this.onChange.bind(this);

    }

 onChange(value) {
  this.setState({ captchaState:value,err_captchaState:'' });
}

  _handleChange(evt) {
    var err_emailAddress = this.state.err_emailAddress;
    var err_password = this.state.err_password;
    if (evt.target.name == 'emailAddress') {
      err_emailAddress = '';
    }
    if (evt.target.name == 'password') {
      err_password = '';
    }
    this.setState({successMessage:'',myStyle:'',
                   err_class:'',err_password:err_password,
                   err_emailAddress:err_emailAddress, [evt.target.name]:evt.target.value });

  }

 _handleValidate(evt){
  var err_emailAddress = '';
  var err_password = '';
  var err_captchaState = '';

  var regEmail = /(.+)@(.+){2,}\.(.+){2,}/;
  if (regEmail.test(this.state.emailAddress) == false){
      err_emailAddress = 'Please Enter Valid Email Address';
   }
   if (this.state.password == '') {
      err_password = 'Please Enter Valid Password';
   }
   // if (this.state.captchaState == '') {
   //    err_captchaState = 'Captcha must be verified';
   // }

   if (err_emailAddress || err_password  !== '') {
    this.setState({ err_emailAddress: err_emailAddress,
                    err_password:err_password,
                     });
   }else{
    this.setState({ err_emailAddress: '',
                    err_password:'',
                    err_captchaState:'' });
    this._handleSubmit();
   }
}

_handleSubmit(){
  let that = this;
  this.setState({loading:true });

   let post_data = {
         email:this.state.emailAddress,
          password:this.state.password
      }
      that.props.postLogin(post_data).then(response => { 
        if (response.data.success) {
            that.setState({successMessage:response.data.msg,
                           myStyle:{color:'green',margin:'5px'},
                           err_class :'col-md-12 alert alert-success text-center' });

            var student_name = response.data.data.firstname+' '+response.data.data.lastname;
         localStorage.setItem('sess_user_id',response.data.user_id);
         localStorage.setItem('student_name',student_name);

        setTimeout(function(){ 
            that.props.history.push('/dashboard');},
          2000);
        }else{
          that.setState({successMessage:response.data.msg,
                         myStyle:{color:'red',margin:'5px'},
                         err_class :'col-md-12 alert alert-danger text-center',loading:false });
        }
      }).catch(function (error) {
        console.log(error);
    });  
}

  render() {   
    return(  
        <React.Fragment>
           <div className="container">
              <div className="login-content">
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

                        <div className="form-group">
                            <label>Email address</label>
                              <input type="text" 
                                     className="form-control"
                                     placeholder="Email / User Name"
                                     name="emailAddress" 
                                     onChange={(evt) => this._handleChange(evt)} 
                                     value={this.state.emailAddress}/>
                  {this.state.err_emailAddress && 
                      <span className="text-center" style={{color:'red',margin:'3px'}}>
                        {this.state.err_emailAddress}</span>}

                        </div>

                         <CustomLoader loading={this.state.loading}/>

                        <div className="form-group">
                            <label>Password</label>
                              <input type="password" 
                                     className="form-control"
                                     placeholder="Password"
                                     name="password" 
                                     onChange={(evt) => this._handleChange(evt)} 
                                     value={this.state.password}/>
                  {this.state.err_password && 
                      <span className="text-center" style={{color:'red',margin:'3px'}}>
                        {this.state.err_password}</span>}

                        </div>
                        <div className="login-checkbox">
                            <label className="pull-right">
                                <Link to={'./forgot-password'}>Forgotten Password?</Link>
                            </label>
                        </div>

                        <div className="row" style={{marginTop:'30px',justifyContent:'center'}}>
                         <ReCAPTCHA
                            sitekey={recaptcha_siteKey}
                            onChange={this.onChange} />

                      {this.state.err_captchaState && 
                        <span className="text-center" style={{color:'red',margin:'3px'}}>
                        {this.state.err_captchaState}</span>}
                            
                          </div>


                        <div className="row" style={{marginTop:'30px'}}>
                          <div className="col-6">
                              <button type="button" className="btn btn-success btn-flat m-b-30 m-t-30" 
                                onClick={(evt)=>this._handleValidate(evt)}>Sign in</button>
                          </div>
                          <div className="col-6">
                            <Link to={'./register'} className="btn btn-flat m-b-30 m-t-30 Login_class">Create Account</Link>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
         </React.Fragment>
          );
        }
    }

Login.propTypes = {
    postLogin: PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {postLogin})(Login));
