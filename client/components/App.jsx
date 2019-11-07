import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Animals from './Animals'
import Vehicles from './Vehicles'
import Christmas from './Christmas'
import Ross from './Ross'

class App extends React.Component {
  
  render(){
    return (
      <div>
        <div className="container">
        
          <Router>
          
            <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/animals" component={Animals}/>
              <Route exact path="/vehicles" component={Vehicles}/>
              <Route exact path="/christmas" component={Christmas}/>
              <Route exact path="/ross" component={Ross}/>
            </div>
            
          </Router>
          
    
        </div>
      </div>
      
    )
  }
}
  


export default App
