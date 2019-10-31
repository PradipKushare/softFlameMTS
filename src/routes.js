import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const News = React.lazy(() => import('./views/News/News'));
const MyTest = React.lazy(() => import('./views/MyTest/MyTest'));
const StudyMaterial = React.lazy(() => import('./views/StudyMaterial/StudyMaterial'));
const Bookmark = React.lazy(() => import('./views/Bookmark/Bookmark'));
const Reports = React.lazy(() => import('./views/Reports/Reports'));
const Daubt = React.lazy(() => import('./views/Daubt/Daubt'));
const MyProfile = React.lazy(() => import('./views/MyProfile/MyProfile'));
const ReportAnalysis = React.lazy(() => import('./views/ReportAnalysis/ReportAnalysis'));
const Login = React.lazy(() => import('./views/Login/Login'));
const Register = React.lazy(() => import('./views/Register/Register'));
const ForgotPassword = React.lazy(() => import('./views/Login/ForgotPassword'));
const StartTest = React.lazy(() => import('./views/MyTest/StartTest/StartTest'));
const ResetPassword = React.lazy(() => import('./views/Login/ResetPassword'));




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Dashboard' },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/news', exact: true, name: 'News', component: News },
    { path: '/take-test', exact: true, name: 'My Test', component: MyTest },
    { path: '/study-material', exact: true, name: 'Study Material', component: StudyMaterial },
    { path: '/bookmark', exact: true, name: 'Bookmark', component: Bookmark },
    { path: '/reports', exact: true, name: 'Reports', component: Reports },
    { path: '/daubt', exact: true, name: 'Daubt', component: Daubt },
    { path: '/my-profile', exact: true, name: 'MyProfile', component: MyProfile },
    { path: '/report-analysis', exact: true, name: 'ReportAnalysis', component: ReportAnalysis },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/register', exact: true, name: 'Register', component: Register },  
    { path: '/forgot-password', exact: true, name: 'ForgotPassword', component: ForgotPassword },  
    { path: '/start-test', exact: true, name: 'StartTest', component: StartTest },  
    { path: '/reset-password/:email', exact: true, name: 'ResetPassword', component: ResetPassword },  
    

    
];

export default routes;
