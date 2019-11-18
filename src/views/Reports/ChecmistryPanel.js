import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
class ChecmistryPanel extends Component {
render() {   
    return(  
    <React.Fragment>
      <Table bordered hover className="dataTable">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Test Name</th>
            <th>Date</th>
            <th>Attempted Ques</th>
            <th>Right/Wrong Ques</th>
            <th>Percentage</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>

          <tr>
             <td colSpan="7" className="text-center" style={{fontSize:'1.2em',background:'#FFFFFF',color:'#000'}}>No data available in table
            </td>
          </tr>
        </tbody>
      </Table>
     </React.Fragment>
          );
        }
    }

export default ChecmistryPanel;