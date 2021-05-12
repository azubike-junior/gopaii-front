import './App.css';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import PrivatePolicyPage from './pages/PrivatePolicyPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import TermsConditionPage from './pages/TermsConditionPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Sidebar/>
           <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/private-policy' component={PrivatePolicyPage}/>
            <Route exact path='/return-policy' component={ReturnPolicyPage}/>
            <Route exact path='/terms-condition' component={TermsConditionPage}/>
           </Switch>
           <Footer/>
        </Router>
    </div>
  );
}

export default App;
