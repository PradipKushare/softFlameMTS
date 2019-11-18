import React, { Component } from 'react';
import {  UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, } from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link,withRouter } from 'react-router-dom';


import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/cc.png'
import tmp_image from '../../assets/img/default_user.jpg'

import ChangePasswordModal from '../../views/MyProfile/ChangePasswordModal';
import { setProfileStore } from '../../actions/homepage';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
      constructor(props) {
      super(props);
      this.state = {
        show:false,
      };
       this.handleShow                =  this.handleShow.bind(this);
    }
    
  handleShow(evt){
    evt.preventDefault();
    this.setState({ show:true });
  }

componentDidMount() {
  this.props.setProfileStore(); 
}
  render() {
    const { children, ...attributes } = this.props;
    var default_user = '';
    let saveProPic = localStorage.getItem('profile_pics');
    if (saveProPic!== '' && saveProPic!== undefined) {
      default_user = saveProPic;
    }else{
      default_user = tmp_image;   
    }

    
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />

        <AppNavbarBrand
          full={{ src: logo, width: '80%', alt: 'CoreUI Logo' }}
          minimized={{ src: logo, width: '30%', alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={default_user} className="img-avatar" alt="" />
            </DropdownToggle>
            <DropdownMenu right>

              <DropdownItem>
                <Link to={'/my-profile'}><i className="icon-user"></i> Profile</Link>
              </DropdownItem>

              <DropdownItem>
               <a href="javascript:void(0);" onClick={(evt)=>this.handleShow(evt)}>
                <i className="icon-user"></i> Change Password</a>
              </DropdownItem>

              <DropdownItem>
                <Link to={'/login'}><i className="icon-logout"></i> Log Out</Link>
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

        <ChangePasswordModal show={this.state.show} />

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = {
    setProfileStore:PropTypes.func.isRequired,
  }

   function mapStateToProps(state) {
    return {
      saveProPic:state.save_profile.saveProPic,
    };
  }

export default withRouter(connect(mapStateToProps,{setProfileStore} )(DefaultHeader));


