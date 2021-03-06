import React from 'react';
import { Link } from 'react-router-dom';


class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username:'mmmm'
    }
  }

    render(){
        return(
            <div className="contact-c">
            <main role="main" className="container">
  <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
    <img className="mr-3" src="/docs/4.3/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48"/>
    <div className="lh-100">
      <h6 className="mb-0 text-white lh-100">Bootstrap</h6>
      <small>Since 2011</small>
    </div>
    </div>

  <div className="my-3 p-3 bg-white rounded shadow-sm">
    <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
    <div className="media text-muted pt-3">
      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/007bff"></rect><text x="50%" y="50%" fill="/007bff" dy=".3em">32x32</text></svg>
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">{this.state.username}</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div className="media text-muted pt-3">
      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/e83e8c"></rect><text x="50%" y="50%" fill="/e83e8c" dy=".3em">32x32</text></svg>
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div className="media text-muted pt-3">
      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/6f42c1"></rect><text x="50%" y="50%" fill="/6f42c1" dy=".3em">32x32</text></svg>
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <small className="d-block text-right mt-3">
      <Link to="/">All updates</Link>
    </small>
  </div>

  <div className="my-3 p-3 bg-white rounded shadow-sm">
    <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
    <div className="media text-muted pt-3">
      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/007bff"></rect><text x="50%" y="50%" fill="/007bff" dy=".3em">32x32</text></svg>
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="text-gray-dark">Full Name</strong>
          <Link to="/">Follow</Link>
        </div>
        <span className="d-block">@username</span>
      </div>
    </div>
    <div className="media text-muted pt-3">
      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/007bff"></rect><text x="50%" y="50%" fill="/007bff" dy=".3em">32x32</text></svg>
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="text-gray-dark">Full Name</strong>
          <Link to="/">Follow</Link>
        </div>
        <span className="d-block">@username</span>
      </div>
    </div>
    <div className="media text-muted pt-3">
      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="/007bff"></rect><text x="50%" y="50%" fill="/007bff" dy=".3em">32x32</text></svg>
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="text-gray-dark">Full Name</strong>
          <Link to="/">Follow</Link>
        </div>
        <span className="d-block">@username</span>
      </div>
    </div>
    <small className="d-block text-right mt-3">
      <Link to="/">All suggestions</Link>
    </small>
  </div>
</main>
 </div>         
           
        )
    }
}
export default Contact;