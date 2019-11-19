import React, { Component, Suspense } from 'react';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { createBrowserHistory } from "history";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Link, Route, Redirect,Switch,withRouter } from 'react-router-dom';
import { setProfileStore } from '../../actions/homepage';

import {
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

import tmp_image from '../../assets/img/default_user.jpg'

const history = createBrowserHistory();

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  componentDidMount() {
    this.props.setProfileStore(); 
  }
  render() {
    let dispFlag = false;
   let tmp_paths = ['login','register','forgot-password','start-test','reset-password','take_test/questions','take_test/test_summary']
    const pathname = window.location.href;
    for (var i = 0; i < tmp_paths.length; i++) {
      if (pathname.includes('/'+tmp_paths[i])) {
         dispFlag = true;
          document.body.classList.add('bg_darck');
        }else{
          document.body.classList.remove('bg_darck');  
        }

        if (tmp_paths[i] == 'take_test/questions') {
          document.body.classList.add('bg_darck_test_page');
        }
      }

      if (pathname.includes('/take_test/questions')) {
         let examData = JSON.parse(localStorage.getItem('examData'));
           if (examData == null ) {
            window.location.href = 'http://localhost:3000/#/take-test';
        }
      }

    var default_user = '';
    let saveProPic = localStorage.getItem('profile_pics');
   if (saveProPic!== '' && saveProPic!== undefined) {
      default_user = saveProPic;
    }else{
      default_user = tmp_image;   
    }

    let student_name = localStorage.getItem('student_name');

    return (
      <div className="app">
        {!dispFlag &&
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>}

        <div className="app-body">
        {!dispFlag &&
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <div className="user-panel">
                <div className="user_image">
                    <img src={default_user} className="img-circle mCS_img_loaded" alt="" />
                </div>
                <div className="info">
                    <p> 
                      <Link style={{color: '#FFF'}} to={'./login'}> {student_name ? student_name : 'No user'}</Link> </p>
                   <i className="fa fa-circle text-success"></i> Online
                </div>
            </div>

            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>}

          {!dispFlag &&
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} history={history}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>}

      {dispFlag &&  
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
       }
         
        </div>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
    setProfileStore:PropTypes.func.isRequired,
  }

   function mapStateToProps(state) {
    return {
      saveProPic:state.save_profile.saveProPic,
    };
  }

export default withRouter(connect(mapStateToProps,{setProfileStore} )(DefaultLayout));
