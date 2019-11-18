import React, { Component } from 'react';

import MTSlogo from '../../../assets/img/brand/MTS logo.png';
import tmp_image from '../../../assets/img/default_user.jpg';

class TestReportHeader extends Component {
  constructor(props) {
    super(props);
}

  render() {   
    var default_user = '';
    let saveProPic = localStorage.getItem('profile_pics');
    if (saveProPic!== '' && saveProPic!== undefined) {
      default_user = saveProPic;
    }else{
      default_user = tmp_image;   
    }

  return(  
           <header className="main-header">
            <div className="container_header">
                <div className="logo d-flex align-items-center">
                  <strong className="logo_icon"> 
                    <img src={MTSlogo} alt="" style={{width: '46%'}} />
                    </strong>
                        
                    <div className="icon_menu full_menu" id="topmenusidevbar" style={{display: 'none'}}>
                        <a href="#" className="menu-toggler sidebar-toggler hidden-md"></a>
                    </div>
                </div>
                <div className="right_detail">
                    <div className="row d-flex align-items-center min-h pos-md-r">
                        <div className="col-xl-5 col-3 search_col ">
                            <div className="top_function">
                            </div>
                        </div>
                        <div className="col-xl-7 col-9 d-flex justify-content-end">
                            <div className="right_bar_top d-flex align-items-center">
                              <div className="dropdown dropdown-user">
                                  <a href="javascript:void(0);" className="dropdown-toggle"> 
                                  <img className="img-circle pro_pic" src={default_user} alt="" /> 
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </header>
          );
        }
    }

export default TestReportHeader;