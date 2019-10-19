import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
class TestAnalysis extends Component { 
render() {   
    return(  
        <React.Fragment>
          <div className="row">
           <div className="col-12">
            <Table bordered hover className="dataTable">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Topic</th>
                <th>Total/Attempted<br />Questions</th>
                <th>Correct/Incorrect<br />Questions</th>
                <th>Right Marks/<br />Negative Marks</th>
                <th>Left Questions/<br />Left Marks</th>
                <th>Time Taken<br />(min)</th>
                <th>Max Marks</th>
                <th>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Physics</td>
                <td>-</td>
                <td>10/10</td>
                <td>2/8</td>
                <td>8/8</td>
                <td>0/0</td>
                <td>1 min 20 sec</td>
                <td>40.00</td>
                <td>0</td>          
              </tr>     
             </tbody>
             </Table>
            </div>
            <div className="col-12">
            <div className="" style={{fontWeight:'bold',fontSize:'16px',marginTop:'10px',marginLeft:'5px'}}>
              <span>Difficulty Level Wise Analysis</span>
            </div>

          <Table bordered hover className="dataTable">
            <thead>
              <tr>
                <th>Difficulty</th>
                <th>Total/Attempted<br />Questions</th>
                <th>Correct/Incorrect<br />Questions</th>
                <th>Right Marks/<br />Negative Marks</th>
                <th>Time Taken<br />(min)</th>
                <th>Max Marks</th>
                <th>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Easy</td>
                <td>10/10</td>
                <td>2/8</td>
                <td>8/8</td>
                <td>0/0</td>
                <td>1 min 20 sec</td>
                <td>0</td>          
              </tr>  

               <tr>
                <td>Medium</td>
                <td>03/10</td>
                <td>5/7</td>
                <td>7/2</td>
                <td>4/5</td>
                <td>12 min 35 sec</td>
                <td>5</td>          
              </tr>  

               <tr>
                <td>Hard</td>
                <td>04/23</td>
                <td>6/4</td>
                <td>5/8</td>
                <td>1/2</td>
                <td>5 min 45 sec</td>
                <td>8</td>          
              </tr>     
             </tbody>
             </Table>

            </div>
           </div>


          </React.Fragment>
          );
        }
    }

export default TestAnalysis;