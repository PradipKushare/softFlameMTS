import React, { Component } from 'react';
import {ProgressBar } from 'react-bootstrap';

class TestReportProgressChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentVal:0,
      negativeMarks:0,
      rightMarks:0,
      totalMarks:0,
      totalQuestions:0,
      totalSum:0,
      passStatus:false,
  }
}

componentWillReceiveProps(nextProps) {
  let negativeMarks = nextProps.testReport.negativeMarks;
  let rightMarks = nextProps.testReport.rightMarks;
  let totalMarks = nextProps.testReport.totalMarks;
  let totalQuestions = nextProps.testReport.totalQuestions;
  let totalSum = parseInt(totalQuestions)*parseInt(4);
  let percent_val = totalMarks/totalSum*100;
  let passStatus = false;
    if (percent_val.toFixed(2) > 33) {
        passStatus = true;
    }
    if (!isNaN(percent_val)) {
      percent_val = 0;
    }

  this.setState({percentVal:percent_val.toFixed(2),negativeMarks:negativeMarks,
                 rightMarks:parseInt(rightMarks),totalMarks:parseInt(totalMarks),
                 totalQuestions:parseInt(totalQuestions),totalSum:parseInt(totalSum),
                 passStatus:passStatus});
}

  render() {  
    let {percentVal,negativeMarks,rightMarks,totalMarks,totalQuestions,totalSum,passStatus }  = this.state;

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
             <span style={{fontSize:'18px',color:'#17b3e8'}}>Total Marks:<strong> {totalMarks} </strong>out of {totalSum}</span><br /><br />
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