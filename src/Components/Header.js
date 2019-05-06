import React from 'react';
import { Link } from "react-router-dom";
import LinkItme from './LinkItme';
import logo from '../styles/image/logo-1.png';
import {connect} from 'react-redux';

class Header extends React.Component{
    menutagle = (e)=>{
        let  ulmenue = document.getElementById('navbarCollapse');
        if(ulmenue.style.display === 'none'){
            ulmenue.style.display='block';
        }else{
            ulmenue.style.display='none';
        }
        
    }
    render(){
        return(
            <header>

                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                    <Link className="navbar-brand" to="/">
                <img className="logo-img"  src={logo} alt="logo" />
                    
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={this.menutagle}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse rtl" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto rtl" >
                        <LinkItme className="nav-link" activeOnlyWhenExact={true} to="/" classa="nav-link">صفحه اصلی <span className="sr-only">(current)</span></LinkItme>
                        
                        <LinkItme className="nav-link" to="/blog" classa="nav-link">وبلاگ</LinkItme>
                        <LinkItme className="nav-link" to="/about" classa="nav-link">درباره ما</LinkItme>
                        
                        <LinkItme className="nav-link" to="/contact" classa="nav-link">تماس با ما</LinkItme>
                        
                    </ul>
                  
                    </div>
                    </div>
                </nav>

            </header>
        )
    }
}
const mapstateToProps = state =>{
    console.log("state Search",state);
    return{
      book : state.productapi
    }
  }
  export default connect(mapstateToProps)(Header);