import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {Card } from 'react-bootstrap';
import TestSolution from './TestSolution';
import TestAnalysis from './TestAnalysis';
import ScoreCard from './ScoreCard';
import ScoreCardDetails from './ScoreCardDetails';
class ReportAnalysis extends Component {
render() {   
    return(  
      <React.Fragment>
        <Card>  
          <Card.Body>
            <div className="row mt-3 test-section">
             <Tabs>
              <TabList className="nav nav-tabs nav-fill mb-2">
                  <Tab className="col-4 mx-0 tab_view">Score Card</Tab>
                  <Tab className="col-4 mx-0 tab_view">Test Analysis</Tab>
                  <Tab className="col-4 mx-0 tab_view">Test Solution</Tab>
              </TabList>
        
              <TabPanel>
              <div className="row">
                <div className="col-6">
                    <ScoreCard />
                </div>        
                    <ScoreCardDetails />
                </div>
                
              </TabPanel>

               <TabPanel>
                  <TestAnalysis />
               </TabPanel>

               <TabPanel>
                  <TestSolution />
               </TabPanel>

              </Tabs> 
            </div>
            </Card.Body>
           </Card>
          </React.Fragment>
          );
        }
    }

export default ReportAnalysis;