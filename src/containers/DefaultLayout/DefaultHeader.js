import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/cc.png'
import default_user from '../../assets/img/default_user.jpg'

import ChangePasswordModal from '../../views/MyProfile/ChangePasswordModal';


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

  handleShow(){
    this.setState({ show:true });
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

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
               <a href="javascript:void(0);" onClick={this.handleShow}>
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

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
