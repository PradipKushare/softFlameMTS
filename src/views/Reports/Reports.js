import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {Card} from 'react-bootstrap';
import Pagination from "react-js-pagination";
import ChecmistryPanel from './ChecmistryPanel';
import MathematicsPanel from './MathematicsPanel';
import PCMPanel from './PCMPanel';
import PhysicsPanel from './PhysicsPanel';
import MyTestDropdown from './MyTestDropdown';
import MyTestSearch from './MyTestSearch';
import MyTestPaginate from './MyTestPaginate';
import 'bootstrap-less/bootstrap/bootstrap.less';

class Reports extends Component {
    constructor(props) {
      super(props);
        this.state = {
          activePage: 1
        };
     }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  
render() {   
    return(  
      <React.Fragment>

        <Card>  
          <Card.Body>

        <div className="row mt-3 test-section">
      
         <Tabs>
      
          <TabList className="nav nav-tabs nav-fill mb-2">
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

            <div className="row">
              <div className="col-12">
           
                <span>Showing 1 of 5 entries</span>
            
             <Pagination
              prevPageText='Prev'
              nextPageText='Next'
              activePage={this.state.activePage}
              itemsCountPerPage={10}
              totalItemsCount={20}
              onChange={(pageNumber)=>this.handlePageChange}  />
                
              </div>
            </div>
            </Card.Body>
          </Card>
    

     </React.Fragment>
          );
        }
    }

export default Reports;