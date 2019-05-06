import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import single from './Single'
import axios from 'axios';
import {actioncreators} from '../actions';
import {connect} from 'react-redux'

class Bodyall extends React.Component{
    constructor(props){
        super(props);
        this.state={
            myusername:''
        }
    }
    componentDidMount() {
        axios.get('http://roocket.org/api/products')
        
      .then(response => {
        const { data } = response.data.data;
        for (let i = 0; i < data.length; i++) {
            this.props.dispatch(actioncreators(data[i])) 
        }
      })
      .catch(error => {
          console.log(error);
      })
      }
    onchenge (newuser){
        this.setState({
            myusername : newuser
        });

    }
    dispatchclick = ()=> {
        
           
    }
    render(){
        return(
            <div id='all'>
            
            <Router>
            <Header/>
            <div className="clearfix"></div>
            
            <section className="Container-all">
                <Route exact={true} path="/" component={Home} />
                <Route path="/Blog" component={Blog} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Single" component={single} />
                <Footer/>
                </section>
            </Router>

            </div>
        )
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//       w: () => dispatch(actioncreators(mm))
//     }
//   }
export default connect ()(Bodyall);