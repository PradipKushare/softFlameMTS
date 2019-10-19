import React, { Component } from 'react';

import {Dropdown} from 'react-bootstrap';


class MyTestDropdown extends Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
     }

  
render() {   
 
    return(  
        <React.Fragment>
             <Dropdown className="select_test_by">
             <span className="" style={{marginRight:'20px',fontWeight:'bold',fontSize:'15px'}}>Sort:</span>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Sort Subject By 
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Ascending</Dropdown.Item>
                <Dropdown.Item>Descending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         </React.Fragment>
          );
        }
    }

export default MyTestDropdown;