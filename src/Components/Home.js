import React from 'react';
import { Link } from 'react-router-dom';
import boxService from '../styles/image/box-service-1.jpg';
import boxService2 from '../styles/image/box-service-2.jpg';
import boxService3 from '../styles/image/box-service-3.jpg';
import imgbox from '../styles/image/box-2.jpg';
import imgbox2 from '../styles/image/box-3.jpg'
import imgbox3 from '../styles/image/box-1.jpg';




class Home extends React.Component{

    render(){
        return(
           <section className="home-s">
           <div className="jumbotron">
    <div className="container">
      <h1 className="display-3 rtl">طراحی سایت و سیستم مدیریت محتوا حرفه ای</h1>
      <p>در طراحی سایت ارائه CMS یا همان سیستم مدیرت محتوا توسط لیموترش که از نظر سئو طراحی سایت و بهینه سازی وب سایت امکانات کاملی دارد و دارای سرعت طراحی سایت بارگذاری بالایی می باشد</p>
      <p><Link className="btn btn-primary btn-lg rtl" to="/" role="button">بیشتر بدانید »</Link></p>
    </div>
  </div>
              <div className="container marketing">

<div className="row rtl">
  <div className="col-lg-4 textcenter">
    <img className="bd-placeholder-img rounded-circle" width="140" height="140"  src={boxService} alt="this is img"/>
    <h2>طراحی سایت</h2>
    <p>طراحی سایت هنر بکارگیری برنامه نویسی تحت وب در طرح ریزی طراحی وب سایت می باشد.</p>
    <p><Link className="btn btn-secondary" to="/" role="button">کسب اطلاعات بیشتر »</Link></p>
  </div>
  <div className="col-lg-4 textcenter">
  <img className="bd-placeholder-img rounded-circle" width="140" height="140"  src={boxService2} alt="this is img"/>
    <h2>بهینه سازی سایت</h2>
    <p>سئو طراحی سایت در معنای پیاده سازی الگوریتم های موتورهای جستجو در طراحی وب سایت می باشد.</p>
    <p><Link className="btn btn-secondary" to="/" role="button">کسب اطلاعات بیشتر »</Link></p>
  </div>
  <div className="col-lg-4 textcenter">
  <img className="bd-placeholder-img rounded-circle" width="140" height="140"  src={boxService3} alt="this is img"/>
    <h2>هاستینگ</h2>
    <p>هاستینگ در طراحی سایت قدرتمند با قابلیت پشتیبانی و تامین امنیت هاست فاکتوری مهم تلقی می شود.</p>
    <p><Link className="btn btn-secondary" to="/" role="button">کسب اطلاعات بیشتر »</Link></p>
  </div>
</div>




<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7 rtl">
    <h2 className="featurette-heading">طراحی سایت حرفه ای در تهران <span className="text-muted">با مناسب ترین قیمت</span></h2>
    <p className="lead">اینتن یکی از حرفه ای ترین شرکت های طراحی سایت در تهران است ، اگر شما به دنبال یک شرکت پیشرو با تکنولوژی های بروز طراحی سایت در تهران هستید ، نمونه کار های حرفه ای طراحی سایت اینتن را بررسی نمایید ، اینتن برای طراحی سایت حرفه ای در تهران از بهترین باتجربه ترین کارشناسان طراحی سایت در ایران استفاده کرده است.</p>
  </div>
  <div className="col-md-5">
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="this is img" src={imgbox} />
  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading rtl">طراحی سایت اینترنتی</h2>
    <p className="lead rtl">امروزه طراحی سایت اینترنتی یکی از اولین نیاز های شرکت ها و بنگاه های اقتصادی برای رقابت با رقبای چندین ساله خود در ایران است ، اگر شما به دنبال طراحی سایت اینترنتی در تهران هستید ، اینتن با برنامه نویسان و طراحان خبره خود در حوزه طراحی سایت اینترنتی می تواند خدماتی متفاوت را در اختیار شما عزیزان قرار دهد.</p>
  </div>
  <div className="col-md-5 order-md-1">
  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="this is img" src={imgbox2} />
  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading rtl">بهترین شرکت طراحی سایت در تهران</h2>
    <p className="lead rtl">اینتن با استفاده از جدید ترین تکنولوژی های طراحی سایت و کارشناسان با تجربه و خبره خود ، توانسته در بین 10 شرکت برتر طراحی سایت در تهران قرار گیرد. برای آشنایی با رزومه طراحی سایت اینتن به عنوان یکی از بهترین شرکت های طراحی سایت در تهران نمونه کار های اینتن را بررسی نمایید. برای دریافت رزومه طراحی سایت اینتن با کارشناسان اینتن در تماس باشید.</p>
  </div>
  <div className="col-md-5">
  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="this is img" src={imgbox3} />
  </div>
</div>

<hr className="featurette-divider"/>



</div>
           </section>
           
           
        )
    }
}
export default Home;