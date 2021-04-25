import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NAVIGATION_BAR from './Components/Navbar/Navbar_top.jsx';
import FOOTER from './Components/Footer/Footer.js';
import HOMESCREEN from './Components/HomeScreen/HomeScreen.jsx';
import PROFILESCREEN from './Components/ProfileScreen/Profile_Screen.jsx';



const App = () => {


  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#edf2f4" }} >
        <NAVIGATION_BAR />

        <main >
          <Route path='/' component={HOMESCREEN} exact />
          <Route path='/profile' component={PROFILESCREEN} />




        </main>


        <FOOTER />
      </div>
    </Router>

  )
}

export default App;

// https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80