import React, { Component } from 'react';
import MTSlogo from '../../assets/img/brand/MTS logo login.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Link, Route, Redirect,Switch,withRouter } from 'react-router-dom';

import { postForgotPassword } from '../../actions/homepage';

class ForgotPassword extends Component {
    constructor(props) {
      super(props);
      this.state ={
        emailAddress:'',
        err_emailAddress:'',

        myStyle:[],
        err_class :'',
        successMessage:'',
        disableFlag:false,

     };
       this._handleChange             =       this._handleChange.bind(this);
       this._handleValidate           =       this._handleValidate.bind(this);
    }

  _handleChange(evt) {
    var err_emailAddress = this.state.err_emailAddress;
    if (evt.target.name == 'emailAddress') {
      err_emailAddress = '';
    }
    this.setState({successMessage:'',myStyle:'',disableFlag:false,
                   err_class:'',err_emailAddress:err_emailAddress,
                  [evt.target.name]:evt.target.value });

  }

 _handleValidate(evt){
  var err_emailAddress = '';
  var reWhiteSpace = new RegExp(/^\s+$/);
  var regEmail = /(.+)@(.+){2,}\.(.+){2,}/;
  if (regEmail.test(this.state.emailAddress) == false){
      err_emailAddress = 'Please Enter Valid Email Address';
   }

   if (err_emailAddress !== '') {
    this.setState({ err_emailAddress: err_emailAddress });
   }else{
    this.setState({ err_emailAddress: '',disableFlag:true });
    this._handleSubmit();
   }
}

_handleSubmit(){
   let that = this;
   let post_data = {
         email:this.state.emailAddress,
      }
      that.props.postForgotPassword(post_data).then(response => { 
        if (response.data.success) {
            that.setState({successMessage:response.data.msg,
                           myStyle:{color:'green',margin:'5px'},
                           err_class :'col-md-12 alert alert-success text-center',
                           disableFlag:true });
        }else{
          that.setState({successMessage:response.data.msg,
                         myStyle:{color:'red',margin:'5px'},
                         err_class :'col-md-12 alert alert-danger text-center',
                         disableFlag:false });
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
                        <div className="row" style={{marginTop:'30px'}}>
                          <div className="col-12">
                              <button type="button" disabled={this.state.disableFlag} className="btn btn-success btn-flat m-b-30 m-t-30" 
                                onClick={(evt)=>this._handleValidate(evt)}>Reset Password</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
         </React.Fragment>
          );
        }
    }

    ForgotPassword.propTypes = {
    postForgotPassword: PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {postForgotPassword})(ForgotPassword));
