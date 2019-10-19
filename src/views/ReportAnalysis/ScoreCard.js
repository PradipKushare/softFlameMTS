import React, { Component } from 'react';
import DonutChart from "react-svg-donut-chart"
class ScoreCard extends Component {
 render() {   
      const dataPie = [
        {value: 200, stroke: "#DC143C", strokeWidth: 6},
        {value: 60, stroke: "#32CD32"}]
    return(  
      <React.Fragment>
              <DonutChart size={250}
                          title={'welcomeeee'}
                          data={dataPie}
                          style={{ width: '18rem',margin:'20px' }}/>
      </React.Fragment>
          );
        }
    }

export default ScoreCard;