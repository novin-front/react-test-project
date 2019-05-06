import React from 'react';
import { Route, Link } from "react-router-dom";

class LinkItme extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        const {to ,activeOnlyWhenExact ,children,classa }=this.props;
        return(           
            <Route path={to} exact={activeOnlyWhenExact}
            children={({ match }) => (
              <li className={match ? "active" : ""}>
                {match ? " " : ""}
                <Link to={to} className={classa}>{children}</Link>
              </li>
            )}
          /> 
        )
    }
}
export default LinkItme;