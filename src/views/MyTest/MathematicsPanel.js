import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { SortDate } from './HelperFunction'
import  ColumnClick  from './ColumnClick'

class MathematicsPanel extends Component {
      constructor(props){
      super(props);
      this.state = { 

      };
      this._goStartTest     =     this._goStartTest.bind(this);
    }

  _goStartTest(evt,data){
    evt.preventDefault();
    localStorage.setItem( 'examData', JSON.stringify(data));
    this.props.history.push('/start-test');
}

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
                <strong style={{color:'#069'}}>{data.exam_name}</strong><br />
            Total Marks: {data.total_marks} <br />
            Test Duration: {data.test_duration} Minutes</td>

            <td>{SortDate(data.published_on)}</td>
            <td>{data.subject}</td>

            <td>
              <ul>
                <li>{data.topic}</li>
             </ul>
            </td>

       {data.testStatus == 0 &&
              <td> <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info" onClick={(evt)=>this._goStartTest(evt,data)}>
              Start test </button>
            </td>}

             {data.testStatus == 1 &&
              <td> <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-danger" onClick={(evt)=>this._goStartTest(evt,data)}>
              Incomplete </button>
            </td>}

             {data.testStatus == 2 &&
                <td>
                  <i style={{color:'#4cae4c'}} className="fa fa-check-circle fa-2x"></i> Complete
              </td>}

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