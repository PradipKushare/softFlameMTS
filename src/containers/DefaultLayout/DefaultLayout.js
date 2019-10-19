import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch,Link,browserHistory  } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { createBrowserHistory } from "history";

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

const history = createBrowserHistory();



const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    let dispFlag = false;
    const pathname = this.props.location.pathname;
    if (pathname === '/login' || pathname === '/register' || pathname === '/forgot-password' || pathname === '/start-test') {
      dispFlag = true;
      document.body.classList.add('bg_darck');
    }else{
      document.body.classList.remove('bg_darck');  
    }

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
                    <img src="http://12mts.mocktestseries.in//site_data/uploads/student_profile_pic/default_user.jpg" className="img-circle mCS_img_loaded" alt="" />
                </div>
                <div className="info">
                    <p> 
                      <Link style={{color: '#FFF'}} to={'./login'}> pradip kushare</Link> </p>
                    <Link to={'/'}> <i className="fa fa-circle text-success"></i> Online</Link>
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

export default DefaultLayout;
