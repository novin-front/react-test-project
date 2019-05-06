import React from 'react';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
class Products extends React.Component{
    render(){

        const  {moh}  = this.props;
        const srcimg = moh.book.image;
        return(
            <div className="col-md-4 rtl">
            <div className="card mb-4 shadow-sm rtl">
              <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={srcimg} alt={moh.book.title}/>
              <div className="card-body rtl">
              <h3>{moh.book.title}</h3>
                <p className="card-text rtl">{moh.book.body.substr(0,100)} ...</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link className="btn btn-sm btn-outline-secondary" to={`single/${moh.book.id}`}>بیشتر بدانید</Link>
                  </div>
                  {/* <small className="text-muted">9 mins</small> */}
                </div>
              </div>
            </div>
           </div>
           
        )
    }
}

export default Products;


 