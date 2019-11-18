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
  let totalMarks = nextProps.testReport.totalMarks;
  let totalQuestions = nextProps.testReport.totalQuestions;
  let rightMarks = nextProps.testReport.rightMarks;
  let totalSum = parseInt(totalQuestions)*parseInt(rightMarks);
  let percent_val = totalMarks/totalSum*100;
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