import React, { Component } from 'react';

import ReactSpeedometer from "react-d3-speedometer"


class TestReportSpeedChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentVal:0,
    }
}

componentWillReceiveProps(nextProps) {
  let total_marks = nextProps.testReport.total_marks;
  let total_questions = nextProps.testReport.total_questions;
  let rightMarks = nextProps.testReport.rightMarks;
  let totalSum = parseInt(total_questions)*parseInt(rightMarks);
  let percent_val = total_marks/totalSum*100;
  if (!isNaN(percent_val)) {
    percent_val = 0;
  }
  this.setState({percentVal:percent_val.toFixed(2)});
}

  render() {
  let {percentVal}  = this.state;
  return(  
          <React.Fragment>
          <ReactSpeedometer
                maxValue={100}
                value={percentVal}
                needleColor="red"
                startColor="red"
                segments={10}
                endColor="green"
                textColor="green"
                arcPadding={0.1} 
                cornerRadius={3} 
                animate={true}
                marginInPercent={5}
              />
          </React.Fragment>

          );
        }
    }

export default TestReportSpeedChart;