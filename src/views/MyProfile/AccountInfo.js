import React, { Component } from 'react';
import ChangePasswordModal from './ChangePasswordModal';

class AccountInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show:false,
      };
       this.handleShow                =  this.handleShow.bind(this);
      }

  handleShow(){
    this.setState({ show:true });
  }

render() {   
    return(  

      <React.Fragment>
          <div className="panel-heading">
            <h3 className="panel-title" style={{display: 'contents'}}>
              <span>Account Information</span></h3>
            </div>
          <div className="panel-body">
           <div className="row">
              <div className="col-md-6 col-xl-6">
                  <span>Registration Date</span>
              </div>
              <div className="col-md-6 col-xl-6">
                  <span>14-10-2019</span>
              </div>
          </div>
          <hr />
          <div className="row">
              <div className="col-md-6 col-xl-6">
                  <span>E-mail</span>
              </div>
              <div className="col-md-6 col-xl-6">
                  <span>pradipkushare@gmail.com</span>
              </div>
          </div>
          <hr />
          <div className="row">
              <div className="col-md-6 col-xl-6">
                  <span>Password</span>
              </div>
              <div className="col-md-6 col-xl-6">
                  <span>*******************</span>
              </div>
          </div>
          <hr />
          <div className="row">
              <div className="col-md-12 col-xl-12">
                  <button type="button" className="btn btn-primary"
                          onClick={this.handleShow}>Change Password</button>
              </div>
             </div>
           </div>
          <ChangePasswordModal show={this.state.show} />
        </React.Fragment>
          );
        }
    }

export default AccountInfo;