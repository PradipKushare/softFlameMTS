import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";


class TestReportPieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options:{},
       series: [],
        }
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.testReport) {
          let total_questions = nextProps.testReport.total_questions;
          let leftQuestion = nextProps.testReport.leftQuestion;
          let correctQuestion = nextProps.testReport.correctQuestion;
          let wrongQuestion = nextProps.testReport.wrongQuestion;

         leftQuestion = leftQuestion/total_questions*100;
         correctQuestion = correctQuestion/total_questions*100;
         wrongQuestion = wrongQuestion/total_questions*100;
         
              let options = {
                  labels: ['Left', 'Right', 'Wrong'],
                  colors: ['#55ce63', '#f62d51', '#ffbc34'],
                  responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 250
                      },
                      legend: {
                        position: 'left',
                        fontSize: '14px',
                        fontFamily: 'Helvetica, Arial',
                      }
                    }
                  }]
                };
            this.setState({options:options,series: [leftQuestion,correctQuestion,wrongQuestion]});
        }
      }

  render() {   
    let {testReport} = this.props;

  return(  
          <React.Fragment>
              <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="430" />
          </React.Fragment>

          );
        }
    }

export default TestReportPieChart;