import React from "react";
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from "./UserList";
 import Profile from "./Profile/Profile";
 

function App() {
  return (
  <Router>
      <section>
         <Route exact path="/" component={UserList} />
        <Route
          exact
          path="/users/:id"
          render={(props) => <Profile {...props} />} //rendering final list 
        />
        
      </section>

      
  </Router>
  );
}

export default App;