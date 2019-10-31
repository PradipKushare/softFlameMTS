import React, { Component } from 'react';

import {Button,Modal} from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Link, Route, Redirect,Switch,withRouter } from 'react-router-dom';
import { changePassword } from '../../actions/homepage';

class ChangePasswordModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        oldPassword:'',
        newPassword:'',
        confirmPassword:'',

        err_oldPassword:'',
        err_newPassword:'',
        err_confirmPassword:'',

        myStyle:[],
        err_class :'',
        successMessage:'',

        show:false,
      };
       this.handleClose     =  this.handleClose.bind(this);
       this._handleChange   =  this._handleChange.bind(this);
       this._handleValidate = this._handleValidate.bind(this);
  }

componentWillReceiveProps(nextProps) {
    this.setState({ show:nextProps.show });
}

_handleChange(event) {
  var err_oldPassword = this.state.err_oldPassword;
  var err_newPassword = this.state.err_newPassword;
  var err_confirmPassword = this.state.err_confirmPassword;

  if (event.target.name == 'oldPassword') {
    err_oldPassword = '';
  }
  if (event.target.name == 'newPassword') {
    err_newPassword = '';
  }
  if (event.target.name == 'confirmPassword') {
    err_confirmPassword = '';
  }

 this.setState({successMessage:'',myStyle:'',
                err_class:'', [event.target.name]:event.target.value,
                err_oldPassword:err_oldPassword,
                err_newPassword:err_newPassword,
                err_confirmPassword:err_confirmPassword });
}

_handleValidate(){
  var err_oldPassword = '';
  var err_newPassword = '';

    if (this.state.oldPassword == '') {
      err_oldPassword = 'Please enter old password';
   }
    if (this.state.newPassword == '') {
      err_newPassword = 'Please enter new password';
   }
    if (err_oldPassword || err_newPassword  !== '') {
        this.setState({ err_oldPassword:err_oldPassword,
                        err_newPassword:err_newPassword });
   }else{
      if (this.state.confirmPassword !== this.state.newPassword) {
      this.setState({ err_confirmPassword:'Recomfirmation password doesn\'t match' });
    }else{
      
       this.setState({ err_confirmPassword:'' });
      this._handleSubmit();
    }
   }
}
_handleSubmit(){
 let that = this;
  let post_data = {
        old_password:this.state.oldPassword,
        new_password:this.state.newPassword,
        sess_user_id:localStorage.getItem('sess_user_id')  
    }

    that.props.changePassword(post_data).then(response => { 
      if (response.data.success) {
          that.setState({successMessage:response.data.msg,
                         myStyle:{color:'green',margin:'5px'},
                         err_class :'col-md-12 alert alert-success text-center' });
        setTimeout(function(){ 
            that.setState({ show:false })},
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

handleClose(){
  this.setState({ show:false });
}

render() {   
    return(  
      <React.Fragment>       
          <Modal show={this.state.show} onHide={this.handleClose} backdrop="true" className="password-modal">
            <Modal.Header closeButton>
              <Modal.Title>
              <div className="panel-heading">
                <h3 className="panel-title" style={{display: 'contents'}}> 
                  <span>Change Password</span>
                </h3>
              </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="panel-body personal-info"> 

            {this.state.successMessage &&
              <div className="col-md-12 d-flex justify-content-center" style={this.state.myStyle}>
               <span className={this.state.err_class}>{this.state.successMessage}</span>
            </div>}

              <div className="row">
                  <div className="col-md-4 col-xl-6">
                      <span>Previous Password:</span>
                  </div>
                  <div className="col-md-12 col-xl-12">
                       <span>
                         <input type="password" 
                                className="form-control" 
                                placeholder="Previous Password"
                                name="oldPassword" 
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.oldPassword}/>
              {this.state.err_oldPassword && 
                <span className="text-center chnage-pass-error" style={{color:'red',margin:'3px'}}>{this.state.err_oldPassword}</span>}

                    </span>
                  </div>
              </div>
              <hr />

               <div className="row">
                  <div className="col-md-4 col-xl-6">
                      <span>New Password:</span>
                  </div>
                  <div className="col-md-12 col-xl-12">
                       <span>
                         <input type="password" 
                                className="form-control" 
                                placeholder="Previous Password"
                                name="newPassword" 
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.newPassword}/>
              {this.state.err_newPassword && 
                <span className="text-center chnage-pass-error" style={{color:'red',margin:'3px'}}>{this.state.err_newPassword}</span>}
                    </span>
                  </div>
              </div>
              <hr />

               <div className="row">
                  <div className="col-md-4 col-xl-6">
                      <span>Retype Password:</span>
                  </div>
                  <div className="col-md-12 col-xl-12">
                       <span>
                         <input type="password" 
                                className="form-control" 
                                placeholder="Previous Password"
                                name="confirmPassword" 
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.confirmPassword}/>
            {this.state.err_confirmPassword && 
                <span className="text-center chnage-pass-error" style={{color:'red',margin:'3px'}}>{this.state.err_confirmPassword}</span>}
                    </span>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" style={{color:'#FFFFFF'}} onClick={this._handleValidate}>
                Reset Password
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
          );
        }
    }


ChangePasswordModal.propTypes = {
    changePassword: PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {changePassword})(ChangePasswordModal));