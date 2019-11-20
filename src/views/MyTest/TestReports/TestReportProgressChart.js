import React, { Component } from 'react';
import {ProgressBar } from 'react-bootstrap';

class TestReportProgressChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentVal:0,
      negativeMarks:0,
      rightMarks:0,
      total_marks:0,
      total_questions:0,
      totalSum:0,
      passStatus:false,
  }
}

componentWillReceiveProps(nextProps) {
  let negativeMarks = nextProps.testReport.negativeMarks;
  let rightMarks = nextProps.testReport.rightMarks;
  let total_marks = nextProps.testReport.total_marks;
  let total_questions = nextProps.testReport.total_questions;
  let totalSum = parseInt(total_questions)*parseInt(4);
  let percent_val = total_marks/totalSum*100;
  let passStatus = false;
    if (percent_val.toFixed(2) > 33) {
        passStatus = true;
    }
    if (!isNaN(percent_val)) {
      percent_val = 0;
    }

  this.setState({percentVal:percent_val.toFixed(2),negativeMarks:negativeMarks,
                 rightMarks:parseInt(rightMarks),total_marks:parseInt(total_marks),
                 total_questions:parseInt(total_questions),totalSum:parseInt(totalSum),
                 passStatus:passStatus});
}

  render() {  
    let {percentVal,negativeMarks,rightMarks,total_marks,total_questions,totalSum,passStatus }  = this.state;

  return(  
          <React.Fragment>
          <div className="report-progress">
             <div className="marks-progressbar">Correct Marks: {rightMarks}</div>
             <ProgressBar striped animated now={rightMarks} />
          </div>

            <div className="report-progress">
              <div className="marks-progressbar">Negative Marks:{negativeMarks}</div>
                <ProgressBar striped animated variant="danger" now={negativeMarks} />
           </div>

           <div className="report-anyls-text text-center">      
             <span style={{fontSize:'18px',color:'#17b3e8'}}>Total Marks:<strong> {total_marks} </strong>out of {totalSum}</span><br /><br />
             <span style={{fontSize:'18px',color:'#17b3e8'}}>Percentage: <strong>{percentVal}%</strong></span>               
           </div>

           <div className="report-progress status-progressbar">
             <ProgressBar now={100} variant={passStatus ? "success" : "danger"} label={passStatus ? 'Passing Status: Pass' : 'Passing Status: Fail'} />
          </div>
          </React.Fragment>

          );
        }
    }

export default TestReportProgressChart;