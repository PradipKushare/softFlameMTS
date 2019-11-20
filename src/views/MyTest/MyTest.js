import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import {Card} from 'react-bootstrap';
import ChecmistryPanel from './ChecmistryPanel';
import MathematicsPanel from './MathematicsPanel';
import PCMPanel from './PCMPanel';
import PhysicsPanel from './PhysicsPanel';
import MyTestDropdown from './MyTestDropdown';
import MyTestSearch from './MyTestSearch';
import MyTestPaginate from './MyTestPaginate';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Pagination from "react-js-pagination";
import 'bootstrap-less/bootstrap/bootstrap.less';

import { getUserTestData } from '../../actions/homepage';


class MyTest extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        getTestData:[],
        tmp_subject:'',
        sortBy:'ascending',
        subject:'Physics',
        searchKey:'',
        activePage:parseInt(1),
        initLoading:'Loading data, please wait.....',
        dispItem:parseInt(3),
      };
      this._getDashboardData      =     this._getDashboardData.bind(this);
      this._passSubject           =     this._passSubject.bind(this);
      this._getSortBy             =     this._getSortBy.bind(this);
      this._getSearchKey          =     this._getSearchKey.bind(this); 
      this.handlePageChange       =     this.handlePageChange.bind(this);
      this._getDispBy             =     this._getDispBy.bind(this);

      

    }


  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this._getDashboardData(this.state.tmp_subject,this.state.sortBy,parseInt(pageNumber),this.state.dispItem);
  }

  _getSearchKey(searchKey){
    this.setState({ searchKey: searchKey });
  }
     _getSortBy(sort_by){
      this.setState({dispItem:parseInt(3), sortBy: sort_by });
      this._getDashboardData(this.state.tmp_subject,sort_by,parseInt(1),this.state.dispItem)
     }

      _getDispBy(disp_item){
      this.setState({ dispItem: disp_item,activePage:parseInt(1) });
      this._getDashboardData(this.state.tmp_subject,this.state.sortBy,parseInt(1),disp_item)
     }

  _getDashboardData(subject,sort_by,page_number,disp_item){
   let that = this;
   let post_data = {
            subject:subject,
            sort_by:sort_by,
            page_number:page_number,
            per_page:disp_item,
            user_id:localStorage.getItem('sess_user_id')
        }

        that.props.getUserTestData(post_data).then(response => { 
            if (response.data.success) {
                that.setState({tmp_subject:subject, getTestData:response.data.data,initLoading:'' });
            }else{
                that.setState({ getTestData:[],initLoading:'No data available in table....' });
             }
         }).catch(function (error) {
      console.log(error);
    }); 
}

_passSubject(evt,subject,sort_by,item_disp){
   evt.preventDefault();
      this.setState({ subject: subject,sortBy:sort_by,activePage:parseInt(1),dispItem:3 });
   this._getDashboardData(subject,'ascending',parseInt(1),item_disp)
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.activePage !== this.state.activePage) {
   this._getDashboardData(this.state.subject,this.state.sortBy,parseInt(this.state.activePage),this.state.dispItem); 
  }  
}

componentDidMount() {
   this._getDashboardData(this.state.subject,this.state.sortBy,parseInt(1),this.state.dispItem); 
}

render() {   
  let {getTestData,searchKey,initLoading} = this.state;
  const lowercasedFilter = searchKey.toLowerCase(); 
  const filteredData = getTestData.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(lowercasedFilter)
      );
    });

    return(  
      <React.Fragment>
        <Card>  
          <Card.Body>
          <div className="row mt-3 test-section">
           <Tabs>    
            <TabList className="nav nav-tabs nav-fill mb-2">
                <Tab className="col-3 mx-0 tab_view" onClick={(evt)=>this._passSubject(evt,'Physics','ascending',3)}>Physics</Tab>
                <Tab className="col-3 mx-0 tab_view" onClick={(evt)=>this._passSubject(evt,'Chemistry','ascending',3)}>Chemistry</Tab>
                <Tab className="col-3 mx-0 tab_view" onClick={(evt)=>this._passSubject(evt,'Math','ascending',3)}>Mathematics</Tab>
                <Tab className="col-3 mx-0 tab_view" onClick={(evt)=>this._passSubject(evt,'PCM','ascending',3)}>PCM</Tab>
            </TabList>

            <div className="row">
             <div className="col-12">
               <MyTestDropdown getSortBy={this._getSortBy} sortBy={this.state.sortBy} />
             </div>
            </div>

             <div className="row">
                <div className="col-6">
                  <MyTestPaginate getDispBy={this._getDispBy} dispItem={this.state.dispItem} />
              </div>
             <div className="col-6">
              <div className="col-5" style={{right: 0,position:'absolute'}}>
                <MyTestSearch getSearchKey={this._getSearchKey} />
              </div>
              </div>
             </div>
    
              <TabPanel>
               <PhysicsPanel getTestData={filteredData} initLoading={initLoading} history={this.props.history} />
             </TabPanel>

             <TabPanel>
               <ChecmistryPanel getTestData={filteredData} initLoading={initLoading} history={this.props.history} />
             </TabPanel>

             <TabPanel>
               <MathematicsPanel getTestData={filteredData} initLoading={initLoading} history={this.props.history} />
             </TabPanel>

             <TabPanel>
               <PCMPanel getTestData={filteredData} initLoading={initLoading} history={this.props.history} />
             </TabPanel>
            </Tabs>
            </div>

            {getTestData.length > 0 &&
            <div className="row">
              <div className="col-12">
                <span>Showing {this.state.activePage} of {filteredData.length} entries</span>
             <Pagination
              prevPageText='Prev'
              nextPageText='Next'
              activePage={this.state.activePage}
              itemsCountPerPage={3}
              totalItemsCount={6}
              onChange={this.handlePageChange}  />    
               </div>
              </div>}
              
             </Card.Body>
            </Card>
           </React.Fragment>
          );
        }
    }

MyTest.propTypes = {
    getUserTestData: PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {getUserTestData})(MyTest));
