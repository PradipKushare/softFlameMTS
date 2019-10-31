import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

import ChangeProfilePic from './ChangeProfilePic';
import PersonalInfo from './PersonalInfo';
import AccountInfo from './AccountInfo';

class MyProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }


render() {   
   
    return(  
        <React.Fragment>
          <Card style={{marginTop:'6em'}}>  
            <Card.Body className="my-profile-card-body">
              <ChangeProfilePic />
                <div className="row" style={{margin:'10px'}}> 
                  <div className="col-lg-6 col-md-6 m-10">
                    <div className="panel panel-info">
                      <PersonalInfo />
                  </div>       
                </div>

               <div className="col-lg-6 col-md-6">
                  <div className="panel panel-info">
                    <AccountInfo />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </React.Fragment>
          );
        }
    }

export default MyProfile;