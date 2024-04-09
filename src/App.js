import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage';
import SignUp from './components/sign_up';
import Dashboard from './components/dashboard';
import DashSearch from './components/dash_search';
import Dash_record from './components/dash_record';
import MyCousre from './components/mycourses';
import ChooseLoginMethod from './components/login_opt';
import TeacherLogin from './components/loginteacher';
function App() {
  return (
    <Router>
       <Routes>

<Route exact path="/" element={<LandingPage />} />

</Routes>
      <div>
      <Routes>
      <Route exact path="/sign_up" element={<SignUp />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/dash_search" element={<DashSearch />} />
      <Route exact path="/dash_record" element={<Dash_record />} />
      <Route exact path="/My_dash" element={<MyCousre />} />
      <Route exact path="/login_opt" element={<ChooseLoginMethod />} />
      <Route exact path="/login_tech" element={<TeacherLogin />} />
      </Routes>    
      </div>
      
    </Router>
  );
}

export default App;
