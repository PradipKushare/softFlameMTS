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
            <th>Exam Name</th>
            <th>Published On</th>
            <th>Subjects</th>
            <th>Topic</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>

          <tr>
             <td colspan="6" className="text-center" style={{fontSize:'1.2em',background:'#FFFFFF',color:'#000'}}>No data available in table
            </td>
          </tr>
        </tbody>
      </Table>
     </React.Fragment>
          );
        }
    }

export default ChecmistryPanel;