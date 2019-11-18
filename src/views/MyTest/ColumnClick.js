import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ColumnClick extends Component { 
  render() {    
      return(  
          <React.Fragment>
              <th>Sr.No.</th>
              <th>Exam Name</th>
              <th>Published On</th>
              <th>Subjects</th>
              <th>Topic</th>
              <th>Action</th>
           </React.Fragment>
          );
        }
    }

export default ColumnClick;