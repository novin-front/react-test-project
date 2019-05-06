import React from 'react';
import { Link } from 'react-router-dom';


class About extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ueer:''
    }
  }
    render(){
        return(
            <div className="about-s">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <div className="container">
            <main role="main" className="inner cover rtl">
    <h1 className="cover-heading">خود را با حرفه ای ها آنلاین کنید </h1>
    <p className="lead">گروه طراحی سایت اینتن با تیم مهندسی حرفه ای خدمات طراحی سایت ( طراحی وب سایت ) و بهینه سازی سایت را براساس سلیقه و نظرات مشتریان ارائه می نماید.</p>
    <p className="lead">
      <Link to="#" className="btn btn-lg btn-secondary">کسب اطلاعات بیشتر</Link>
    </p>
  </main>
  </div>
</div>
            </div>
           
           
        )
    }
}
export default About;