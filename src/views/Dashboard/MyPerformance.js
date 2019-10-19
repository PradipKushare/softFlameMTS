import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine} from 'recharts';
class MyPerformance extends Component {
render() {   
    const data = [
      {
        name: 'Physics', pv: 0.1, amt: 0.1,
      },
      {
        name: 'Chemistry', pv: 0.2, amt: 0.2,
      },
      {
        name: 'Math',pv: 0.3, amt: -0.3,
      },
      {
        name: 'Biology', pv: -0.4, amt: 0.4,
      },
      {
        name: 'History', pv: -0.6, amt: -0.3,
      },
      {
        name: 'Geography', pv: 0.3, amt: 0.6,
      },
      {
        name: 'English', pv: 0.8, amt: 0.7,
      },
      {
        name: 'Science', pv: -0.6, amt: 0.8,
      },
       {
        name: 'Computer', pv: 0.2, amt: -0.9,
      },
       {
        name: 'Angular', pv: 1.0, amt: 1.0,
      },
       {
        name: 'React', pv: -0.6, amt: 1.1,
      },
    ];


    return(  
        <React.Fragment>
           <div className="row">
            <div className="col-xl-12 mb-4">
                <Card>  
                    <div className="card-header">
                        <div className="card-title"> My Performance </div>
                        </div>
                        <Card.Body>
                        <div className="card-body">
                                <BarChart
                                    width={1000}
                                    height={400}
                                    data={data}>
                                    <CartesianGrid strokeDasharray="1 1" />
                                    <XAxis dataKey="name" stroke="#8884d8"/>
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <ReferenceLine y={0} stroke="#000" />
                                    <Bar type="monotone"  barSize={30} dataKey="pv" fill="#8884d8" />
                                   
                                  </BarChart>
                       </div>
                      </Card.Body>
                    </Card>
                    </div>
                    </div>
        </React.Fragment>
            );
        }
    }


export default MyPerformance;
