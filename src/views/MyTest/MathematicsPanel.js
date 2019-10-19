import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
class MathematicsPanel extends Component {
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

          <td>101</td>
            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Algebra Equation</strong><br />
            Total Marks: 200 <br />
            Test Duration: 43 Minutes</td>

            <td>21 Dec 2020</td>
            <td>Mathematics</td>

            <td>
              <ul>
                <li>Algebra Equation</li>
             </ul>
            </td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">Start test</button>
            </td>
          </tr>

           <tr>
            <td>102</td>

            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Measurement of Angles</strong><br />
            Total Marks: 300 <br />
            Test Duration: 123 Minutes</td>

            <td>18 Jan 2019</td>
            <td>Mathematics</td>

            <td>
              <ul>
                <li>Measurement of Angles</li>
             </ul>
            </td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">Start test</button>
            </td>
          </tr>

           <tr>
            <td>3</td>

            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Determinants</strong><br />
            Total Marks: 400 <br />
            Test Duration: 210 Minutes</td>

            <td>23 Mar 2020</td>
            <td>Mathematics</td>

            <td>
              <ul>
                <li>Determinants</li>
             </ul>
            </td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">Start test</button>
            </td>
          </tr>

        </tbody>
      </Table>
     </React.Fragment>
          );
        }
    }

export default MathematicsPanel;