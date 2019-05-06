import React from 'react';
// import {connect} from 'react-redux'
// import SingleBook from './SingleBook';
// import { Link } from 'react-router-dom';
// import actioncreators from '../actions';
import axios from 'axios'

class Single extends React.Component{
  constructor(props){
    super();
    this.state={
      singledata :''
    }
    
  }
  componentDidMount(){
    let {pathname} =this.props.location;
    let a = pathname.indexOf("e/")+2;

    const idbook = pathname.slice(a , 10)
  
    axios.get(`http://roocket.org/api/products/${idbook}`)
        
      .then(response => {
        this.setState({
          singledata  : response.data.data
        })
      })
      .catch(error => {
          console.log(error);
      })
  }
    render(){
    
      let {title, body,image } = this.state.singledata;
      console.log(typeof(body));
        return(
           <section className="single-s">
           <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
    <div className="col-md-12 px-0">
    <div className="box-1">
      <h1 className="display-4 font-italic rtl">{title}</h1>
      <p className="lead my-3">{body}</p>
      </div>
      <div className="box-2"><img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="this is img" src={image} /></div>
    </div>
    
  </div>
           </section>
           
        )
    }
}
export default Single;
