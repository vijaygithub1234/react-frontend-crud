import logo from './logo.svg';
import './App.css';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './ROUTESRS/About';
import Home from './ROUTESRS/Home';
import Contact from './ROUTESRS/Contact';
import PageNotFound from './ROUTESRS/PageNotFound';
import AddEmployeesComponent from './components/AddEmployeesComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import AddOrUpdateEmployees from './components/AddOrUpdateEmployees';
import DeleteEmployee from './components/DeleteEmployee';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Route exact path="/" component={About} />
    //     <Route path="/home" component={Home} />
    //     <Route path="/contact" component={Contact} />
    //   </div>
    // </Router>
    //Adding navigation using link 
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>

    //     </ul>
    //     <Switch>
    //       <Route path="/about" component={About} />
    //       <Route exact path="/" component={Home} />
    //       <Route path="/contact" component={Contact} />
    //       <Route component={PageNotFound} />
    //     </Switch>
    //   </div>

    // </Router>

    //Adding navigation using switch
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>

    //     </ul>
    //     <Switch>
    //       <Route path="/about" component={About} />
    //       <Route exact path="/" component={Home} />
    //       <Route path="/contact/:id" component={Contact} />
    //       <Route component={PageNotFound} />
    //     </Switch>
    //   </div>

    // </Router>
    <Router>
      <div>
        <HeaderComponent />


        <div>
          <Switch>
            <Route exact path="/" component={EmployeeListComponent} />
            <Route path="/employees" component={EmployeeListComponent} />
            {/* <Route path="/add-employee" component={AddEmployeesComponent} /> */}
            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent} /> */}
            {/* <Route path="/get-employee-byId/:id" component={EmployeeListComponent} /> */}
            <Route path="/save-or-update-employee/:id" component={AddOrUpdateEmployees} />
            <Route path="/deleteEmployee/:id" component={DeleteEmployee} />
          </Switch>
        </div>
        <FooterComponent />
      </div>
    </Router>


  )
}

export default App;
