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
          let totalQuestions = nextProps.testReport.totalQuestions;
          let leftQuestion = nextProps.testReport.leftQuestion;
          let correctQuestion = nextProps.testReport.correctQuestion;
          let wrongQuestion = nextProps.testReport.wrongQuestion;

         leftQuestion = leftQuestion/totalQuestions*100;
         correctQuestion = correctQuestion/totalQuestions*100;
         wrongQuestion = wrongQuestion/totalQuestions*100;
         
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