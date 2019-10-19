import React, { Component } from 'react';

import {Button,Modal} from 'react-bootstrap';

class ChangePasswordModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        oldPassword:'pradip@softflame',
        newPassword:'softflame@12344',
        confirmPassword:'fggagafggtgrgrwa',
        show:false,
      };
       this.handleClose     =  this.handleClose.bind(this);
       this._handleChange   =  this._handleChange.bind(this);
  }

componentWillReceiveProps(nextProps) {
   this.setState({ show:nextProps.show });
}

_handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
}

handleClose(){
    this.setState({ show:false });
}


render() {   
    return(  
      <React.Fragment>       
          <Modal show={this.state.show} onHide={this.handleClose} className="password-modal">
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
              <div className="row">
                  <div className="col-md-4 col-xl-6">
                      <span>Previous Password:</span>
                  </div>
                  <div className="col-md-12 col-xl-12">
                       <span>
                         <input type="text" 
                                className="form-control" 
                                placeholder="Previous Password"
                                name="oldPassword" 
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.oldPassword}/>
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
                         <input type="text" 
                                className="form-control" 
                                placeholder="Previous Password"
                                name="newPassword" 
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.newPassword}/>
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
                         <input type="text" 
                                className="form-control" 
                                placeholder="Previous Password"
                                name="confirmPassword" 
                                onChange={(evt) => this._handleChange(evt)} 
                                value={this.state.confirmPassword}/>
                    </span>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" style={{color:'#FFFFFF'}} onClick={this.handleClose}>
                Reset Password
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
          );
        }
    }

export default ChangePasswordModal;