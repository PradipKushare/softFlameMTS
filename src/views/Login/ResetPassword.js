import React, { Component } from 'react';
import MTSlogo from '../../assets/img/brand/MTS logo login.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { postResetPassword } from '../../actions/homepage';

class ResetPassword extends Component {
    constructor(props) {
      super(props);
     
    let email   = this.props.match.params.email ? this.props.match.params.email : '';
    const queryString = require('query-string');
    const parsed  = queryString.parse(props.location.search);
    email = parsed.email ? parsed.email : email;
    email = email.replace('email=','');

     this.state ={
        email:email,
        password:'',
        confirm_password:'',
        err_password:'',
        err_confirm_password:'',

        myStyle:[],
        err_class :'',
        successMessage:'',

     };
       this._handleChange            = this._handleChange.bind(this);
       this._handleValidate       =       this._handleValidate.bind(this);
    }

  _handleChange(evt) {

    var err_password = this.state.err_password;
    var err_confirm_password = this.state.err_confirm_password;

    if (evt.target.name === 'password') {
      err_password = '';
    }
      if (evt.target.name === 'confirm_password') {
      err_confirm_password = '';
    }
    this.setState({successMessage:'',myStyle:'',
                   err_class:'',err_password:err_password,
                   err_confirm_password:err_confirm_password,
                  [evt.target.name]:evt.target.value });

  }

 _handleValidate(evt){
  var err_password = '';
    if (this.state.password === '') {
      err_password = 'Please Enter Valid Password';
    }

   if (err_password  !== '') {
      this.setState({ err_password: err_password});
   } 
   else{
        if (this.state.password !== this.state.confirm_password) {
           this.setState({err_confirm_password : 'Recomfirmation password doesn\'t match' });
        }else{
          this.setState({ err_password: '' });
          this._handleSubmit();
        }
      }
    }

_handleSubmit(){
   let that = this;
   let post_data = {
         email:this.state.email,
         password:this.state.password,
      }
      that.props.postResetPassword(post_data).then(response => { 
        if (response.data.success) {
            that.setState({successMessage:response.data.msg,
                           myStyle:{color:'green',margin:'5px'},
                           err_class :'col-md-12 alert alert-success text-center' });
        setTimeout(function(){ 
            that.props.history.push('/dashboard');},
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
                            <label>Enter new password</label>
                              <input type="password" 
                                     className="form-control"
                                     placeholder="Enter new password"
                                     name="password" 
                                     onChange={(evt) => this._handleChange(evt)} 
                                     value={this.state.password}/>

                        {this.state.err_password && 
                          <span className="text-center" style={{color:'red',margin:'3px'}}>
                        {this.state.err_password}</span>}
                        </div>

                        <div className="form-group">
                            <label>Retype new password</label>
                              <input type="password" 
                                     className="form-control"
                                     placeholder="Re-enter new password"
                                     name="confirm_password" 
                                     onChange={(evt) => this._handleChange(evt)} 
                                     value={this.state.confirm_password}/>

                        {this.state.err_confirm_password && 
                          <span className="text-center" style={{color:'red',margin:'3px'}}>
                            {this.state.err_confirm_password}</span>}
                        </div>


                        <div className="row" style={{marginTop:'30px'}}>
                          <div className="col-12">
                              <button type="button" className="btn btn-success btn-flat m-b-30 m-t-30" 
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

    ResetPassword.propTypes = {
    postResetPassword: PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {postResetPassword})(ResetPassword));
