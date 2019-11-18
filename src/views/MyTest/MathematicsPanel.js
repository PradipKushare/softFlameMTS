import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { SortDate } from './HelperFunction'
import  ColumnClick  from './ColumnClick'

class MathematicsPanel extends Component {
render() {   
   let { getTestData,initLoading } = this.props;
    return(  
        <React.Fragment>
      <Table bordered hover className="dataTable">
        <thead>
          <tr>
            <ColumnClick />

          </tr>
        </thead>
        <tbody>

        {getTestData && getTestData.length > 0 && getTestData.map((data,index)=>(
          <tr key={index}>
            <td>{++index}</td>
            <td style={{width:'30%'}}>
                <strong style={{color:'#069'}}>{data.examName}</strong><br />
            Total Marks: {data.totalMarks} <br />
            Test Duration: {data.testDuration} Minutes</td>

            <td>{SortDate(data.publishedOn)}</td>
            <td>{data.subjects}</td>

            <td>
              <ul>
                <li>{data.topic}</li>
             </ul>
            </td>

        {/*<td>
              <i style={{color:'#4cae4c'}} class="fa fa-check-circle fa-2x"></i> Complete
          </td>*/}

            <td>
              <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info">Start test</button>
            </td>

          </tr>))}

        {getTestData.length == 0 &&
         <tr>
             <td colSpan="6" className="text-center" style={{fontSize:'1.2em',background:'#FFFFFF',color:'#000'}}>{initLoading}
            </td>
          </tr>}
  
        </tbody>
      </Table>
     </React.Fragment>
          );
        }
    }

export default MathematicsPanel;