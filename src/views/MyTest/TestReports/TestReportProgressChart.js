import React, { Component } from 'react';
import {ProgressBar } from 'react-bootstrap';

class TestReportProgressChart extends Component {
  constructor(props) {
    super(props);
}

  render() {   
  return(  
          <React.Fragment>
          <div className="report-progress">
             <div className="marks-progressbar">Correct Marks: 8.00</div>
             <ProgressBar striped animated now={25} />
          </div>

            <div className="report-progress">
              <div className="marks-progressbar">Negative Marks: 8.00</div>
                <ProgressBar striped animated variant="danger" now={80} />
           </div>

           <div className="report-anyls-text text-center">      
             <span style={{fontSize:'18px',color:'#17b3e8'}}>Total Marks:<strong> 0 </strong>out of 40</span><br /><br />
             <span style={{fontSize:'18px',color:'#17b3e8'}}>Percentage: <strong>0%</strong></span>               
           </div>

           <div className="report-progress status-progressbar">
             <ProgressBar now={100} variant="danger" label={'Passing Status: Fail'} />
          </div>
          </React.Fragment>

          );
        }
    }

export default TestReportProgressChart;