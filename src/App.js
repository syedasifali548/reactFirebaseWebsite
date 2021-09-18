import React from 'react'
import { Switch,Route } from 'react-router'
import Aboutus from "./pages/Aboutus";
import Home from "./Home";
import Contacts from "./pages/Contacts";
import Service from "./pages/Service";
import Error from "./pages/Error";
const App = () => {
  return (
    <>
    <Switch>
    <Route  exact path="/" component={Home}></Route>
    <Route  path="/about" component={Aboutus}></Route>
    <Route  path="/contact" component={Contacts}></Route>
    <Route  path="/services" component={Service}></Route>
    <Route component={Error}></Route>
    
    </Switch>
    </>
  )
}

export default App