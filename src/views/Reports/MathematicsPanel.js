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
            <td>1</td>
            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Relations and Functions.</strong></td>
            <td>15 Oct 2019</td>
            <td>23/22</td>
            <td>2/5</td>
            <td>15%</td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">View Analysis</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Linear Programming.</strong></td>
            <td>22 Dec 2019</td>
            <td>54/33</td>
            <td>876/67</td>
            <td>45%</td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">View Analysis</button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Algebra</strong></td>
            <td>21 Mar 2023</td>
            <td>76/96</td>
            <td>2/5</td>
            <td>54%</td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">View Analysis</button>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Probability</strong></td>
            <td>10 Jul 2023</td>
            <td>65/32</td>
            <td>1/2</td>
            <td>78%</td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">View Analysis</button>
            </td>
          </tr>
        </tbody>
      </Table>
     </React.Fragment>
          );
        }
    }

export default MathematicsPanel;