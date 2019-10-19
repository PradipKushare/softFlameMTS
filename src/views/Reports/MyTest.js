import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import {Card,Img,Body,Title,Text} from 'react-bootstrap';



import ChecmistryPanel from './ChecmistryPanel';
import MathematicsPanel from './MathematicsPanel';
import PCMPanel from './PCMPanel';
import PhysicsPanel from './PhysicsPanel';

import MyTestDropdown from './MyTestDropdown';
import MyTestSearch from './MyTestSearch';
import MyTestPaginate from './MyTestPaginate';

class MyTest extends Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
     }
  
render() {   
    return(  
      <React.Fragment>

        <Card>  
          <Card.Body>

        <div className="row mt-3 test-section">
      
         <Tabs>
      
          <TabList className="nav nav-tabs nav-fill mb-4">
          <Tab className="col-3 mx-0 tab_view">Physics</Tab>
          <Tab className="col-3 mx-0 tab_view">Chemistry</Tab>
          <Tab className="col-3 mx-0 tab_view">Mathematics</Tab>
          <Tab className="col-3 mx-0 tab_view">PCM</Tab>
            </TabList>

            <div className="row">
             <div className="col-12">
               <MyTestDropdown />
             </div>
             </div>

             <div className="row">
                <div className="col-6">
                  <MyTestPaginate />
              </div>
             <div className="col-6">
              <div className="col-5" style={{right: 0,position:'absolute'}}>
                <MyTestSearch />
              </div>
              </div>
             </div>
    
              <TabPanel>
               <PhysicsPanel />
             </TabPanel>

             <TabPanel>
               <ChecmistryPanel />
             </TabPanel>

             <TabPanel>
               <MathematicsPanel />
             </TabPanel>

             <TabPanel>
               <PCMPanel />
             </TabPanel>
             

              </Tabs>
             
            </div>
            </Card.Body>
          </Card>
    

     </React.Fragment>
          );
        }
    }

export default MyTest;