import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

 import DonutChart from "react-svg-donut-chart"

import $ from 'jquery';

class ChartSection extends Component {
    constructor(props) {
      super(props);
      this.state = { 
         percentage_1 : 87,
         percentage_2 : 71,
         percentage_3 : 68,
         percentage_4 : 81,
      }
     }

componentDidMount() {
/*let browsersChart = null;

console.log('EEEEEEEEEEEEEEEE')
  var color_array = ['#03658C', '#7CA69E', '#F2594A', '#F28C4B', '#7E6F6A', '#36AFB2', '#9c6db2', '#d24a67', '#89a958', '#00739a', '#BDBDBD'];
   browsersChart = Morris.Donut({
    element: 'browsers_chart',
    data   : [{"label":"Chrome","value":423},{"label":"Safari","value":75},{"label":"Firefox","value":147},{"label":"Android Browser","value":5},{"label":"Opera Next","value":4}],
    colors: color_array
  });*/
}

render() {   

    const dataPie = [
    {value: 14, stroke: "#DC143C", strokeWidth: 6},
    {value: 2, stroke: "#32CD32"},
    {value: 1, stroke: "#00BFFF"},
  ]




    return(  
        <React.Fragment>
            <div className="wrapper">
                <div className="row">

                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                          <CircularProgressbar value={this.state.percentage_1} 
                                               text={this.state.percentage_1+'%'}
                                               styles={buildStyles({textColor: '#f88'})}/>
                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                             No of Test Given
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>   
                  

                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                          <CircularProgressbar value={this.state.percentage_2} 
                                               text={this.state.percentage_2+'%'} 
                                               styles={buildStyles({textColor: 'green'})}/>
                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                             Overall Test Performance
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                          <CircularProgressbar value={this.state.percentage_3} 
                                               text={this.state.percentage_3+'%'}
                                               styles={buildStyles({textColor: 'cyan'})} />
                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                            Overall Question Time in Sec.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                             <DonutChart data={dataPie} />
                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                             Last Test Overview
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>

                    {/*<div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                            <div id="browsers_chart"></div>

                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                             Last Test Overview
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>*/}

                </div>
            </div>

        </React.Fragment>

            );
        }
    }


export default ChartSection;
