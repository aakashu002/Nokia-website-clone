import React, { Component } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Security from '../pages/Home/Security'
import Enterprise from '../pages/Enterprise/Enterprise'
import { Route,BrowserRouter as Router,Switch } from  'react-router-dom';

class Routes extends Component
{
    render()
        {
            return(
                <Router>
                    <div>
                        {/* <Header/> */}
                    </div>
                   
                    <Switch>
                    {/* <Route exact path="/" component={Home}/> */}
                    <Route exact path="/" component={Enterprise}/>
                    <Route exact path="/security" component={Security}/>
                    </Switch>
                    {/* <div>
                        <Footer/>
                    </div> */}
                </Router>
            );
        }
}
export default Routes;