import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom';

class SingleBook extends React.Component{
constructor(props){
    super();
    
}
    render(){

        return(
           <section className="single-s">
           
           <div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
  </div>
  <div className="col-md-5">
    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="/eee"></rect><text x="50%" y="50%" fill="/aaa" dy=".3em">500x500</text></svg>
  </div>
</div>

<hr className="featurette-divider"/>
           </section>
           
        )
    }
}

export default SingleBook;
