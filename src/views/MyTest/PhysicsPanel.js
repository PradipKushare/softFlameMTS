import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PhysicsPanel extends Component { 
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
            <td>1</td>

            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Current Electricity</strong><br />
            Total Marks: 60 <br />
            Test Duration: 25 Minutes</td>

            <td>15 Oct 2019</td>
            <td>Physics</td>

            <td>
              <ul>
                <li>Current Electricity</li>
             </ul>
            </td>
            <td>
              <Link to={'./start-test'} style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">Start test</Link>
            </td>
          </tr>

           <tr>
            <td>2</td>

            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Current Electricity</strong><br />
            Total Marks: 60 <br />
            Test Duration: 25 Minutes</td>

            <td>15 Oct 2019</td>
            <td>Physics</td>

            <td>
              <ul>
                <li>Current Electricity</li>
             </ul>
            </td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">Start test</button>
            </td>
          </tr>

           <tr>
            <td>3</td>

            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Current Electricity</strong><br />
            Total Marks: 60 <br />
            Test Duration: 25 Minutes</td>

            <td>15 Oct 2019</td>
            <td>Physics</td>

            <td>
              <ul>
                <li>Current Electricity</li>
             </ul>
            </td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">Start test</button>
            </td>
          </tr>

           <tr>
            <td>4</td>

            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Current Electricity</strong><br />
            Total Marks: 60 <br />
            Test Duration: 25 Minutes</td>

            <td>15 Oct 2019</td>
            <td>Physics</td>

            <td>
              <ul>
                <li>Current Electricity</li>
             </ul>
            </td>
            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">Start test</button>
            </td>
          </tr>

           <tr>
            <td>5</td>

            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>Current Electricity</strong><br />
            Total Marks: 60 <br />
            Test Duration: 25 Minutes</td>

            <td>15 Oct 2019</td>
            <td>Physics</td>

            <td>
              <ul>
                <li>Current Electricity</li>
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

export default PhysicsPanel;