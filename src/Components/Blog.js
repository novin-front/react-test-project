import React from 'react';
//import { Link } from 'react-router-dom';
import Products from './Products';
import {connect} from 'react-redux';

// const product = [];
class Blog extends React.Component{

constructor(props){
  super()
}

    render(){
      let {book}=this.props;
        return(
            <div className="abute-s rtl">
            <section className="jumbotron text-center margin-Blog">
    <div className="container">
      <h1 className="jumbotron-heading">مقالات و دانستنی ها</h1>
      <p className="lead text-muted">در این بخش، ما مطالبی را قرار می دهیم که شما می توانید با مطالعه آنها، درک بهتری از موضوع دیزان و طراحی سایت داشته باشید. امید است تا بهره مندی از این اطلاعات این بخش، به بالا بردن درک صاحبان مشاغل در کشور عزیزمان کمک نماییم.</p>
  
    </div>
  </section>
    <div className="album py-5 bg-light">
    <div className="container">

      <div className="row">
        {book.map( (book , index) =>
            <Products moh={book} key={index}/>
          )}
      </div>
    </div>
    </div>
    </div>
           
           
        )
    }
}
const mapstateToProps = state =>{
  
  return{
    book : state.productapi
  }
}
export default connect(mapstateToProps)(Blog);