import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{

    render(){
        return(
            <footer className="text-muted rtl">
            <div className="container rtl">
                <p className="float-right rtl ">
                
                </p>
                <p> تمامی حقوق مادی و معنوی این وبسایت متعلق به محمد یزدان پناه می باشد و هر گونه کپی برداری پیگرد قانونی دارد</p>
                <p> گروه طراحی سایت ما با پشتوانه علم طراحی سایت و با توجه به الگوریتم های روز دنیا سعی می کند.</p>
                <Link className="to-top" to="/">رفتن به بالا</Link>
            </div>
            </footer>
           
           
        )
    }
}
export default Footer;
