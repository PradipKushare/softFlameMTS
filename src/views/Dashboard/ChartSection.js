import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import DonutChart from "react-svg-donut-chart"

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

render() {   

    const dataPie = [
    {value: 100, stroke: "#DC143C", strokeWidth: 6},
    {value: 60, stroke: "#32CD32"},
    {value: 30, stroke: "#00BFFF"},
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

                </div>
            </div>

        </React.Fragment>

            );
        }
    }


export default ChartSection;
