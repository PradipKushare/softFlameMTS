import React, { Component } from 'react';
import ChartSection from './ChartSection';
import MyPerformance from './MyPerformance';
class Dashborad extends Component {
render() {   
    return(  
        <React.Fragment>
            <ChartSection />
              <MyPerformance />
        </React.Fragment>

            );
        }
    }


export default Dashborad;
