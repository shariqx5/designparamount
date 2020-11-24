import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Notiflix from 'notiflix';
import PrivateRoute from './hoc/privateRoute';
import './App.css';

//Pages
import Home from './pages/home/home';
import LogoDesign from './pages/logoDesign';
import BrandDesign from './pages/brandDesign';
import WebDesign from './pages/webDesign';
import Ultimate from './pages/ultimate/ultimate';
import Pro from './pages/pro/pro';
import Standard from './pages/standard/standard';
import Portfolio from './pages/portfolio';
import Pricing from './pages/pricing/pricing';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import HireDesigner from './pages/hireDesigner/hireDesigner';
import Blogs from './pages/blogs/index';
import SingleBlogPost from './pages/blogs/singleBlogPost';
import CaseStudies from './pages/caseStudies';
import SingleCaseStudy from './pages/caseStudies/singleCaseStudy';
import Request from './pages/request';
import FourZeroFour from './pages/fourZeroFour';
import Login from './pages/login/login';
import ClientHome from './pages/admin/home';
import PendingOrders from './pages/admin/orders/pending/pending';
import OrderDetails from './pages/admin/orders/orderDetails/orderDetails';
import Invoice from './pages/admin/orders/invoice/index';
import Payment from './pages/payment';
import PaymentFailed from './pages/payment/transactionFailed';
import PaymentSuccess from './pages/payment/transactionSuccess';
import PaymentGenerator from './pages/payment/paymentGenerator/paymentGenerator';
import PaymentGeneratorResponse from './pages/payment/paymentGenerator/paymentGeneratorResponse';
import PaymentTokenExpired from './pages/payment/expiredOffer';
import ScrollToTop from './pages/scrollToTop';
import Privacy from './pages/privacyPolicy/privacyPolicy';
import TermsAndCondition from './pages/terms&Condition';

import {URLHelper} from './helpers';

const urlHelper = new URLHelper();

class App extends React.Component{

   componentDidMount(){
      this.initalizeNotiflix();
      const script = document.createElement("script");
      script.src =  "/js/element-mouse-mover.js";
      script.async = true;
      document.body.append(script);

   }



   initalizeNotiflix = ()=>{
      Notiflix.Loading.Init({
          className:'notiflix-loading',
          zindex:4000,
          backgroundColor:'rgba(0,0,0,0.8)',
          fontFamily : "Montserrat",
          rtl:false,
          clickToClose:false,
          svgSize:'30px',
          svgColor:'#5E42D3',
          messageFontSize:'15px',
          messageColor:'#dcdcdc'
      });
  }



   render(){
     return(
        <Router>
           <ScrollToTop />
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path={urlHelper.getURL('logo-design')} component={LogoDesign} />
               <Route exact path={urlHelper.getURL('brand-design')} component={BrandDesign}/>
               <Route exact path={urlHelper.getURL('web-design')} component={WebDesign}/>
               <Route exact path="/ultimate" component={Ultimate} />
               <Route exact path="/pro" component={Pro}/>
               <Route exact path="/standard" component={Standard}/>
               <Route exact path={urlHelper.getURL('portfolio')} component={Portfolio}/>
               <Route exact path={urlHelper.getURL('pricing')} component={Pricing}/>
               <Route exact path={urlHelper.getURL('about')} component={About}/>
               <Route exact path={urlHelper.getURL('contact')} component={Contact}/>
               <Route exact path={urlHelper.getURL('hire-designer')} component={HireDesigner}/>
               <Route exact path={urlHelper.getURL('blogs')} component={Blogs}/>
               <Route exact path={urlHelper.getURL('request')} component={Request}/>
               <Route exact path={urlHelper.getURL('login')} component={Login}/>
               <Route exact path={urlHelper.getURL('privacy')} component={Privacy}/>
               <Route exact path={urlHelper.getURL('terms')} component={TermsAndCondition}/>
               <Route exact path={urlHelper.getURL('payment-stripe')} component={Payment}/>
               <Route exact path={urlHelper.getURL('payment-braintree')} component={Payment}/>
               <Route exact path={urlHelper.getURL('payment-generate')} component={PaymentGenerator}/>
               <Route exact path={urlHelper.getURL('payment-generate-link')} component={PaymentGeneratorResponse} />
               <Route exact path={urlHelper.getURL('payment-failed')} component={PaymentFailed}/>
               <Route exact path={urlHelper.getURL('payment-success')} component={PaymentSuccess}/>
               <Route exact path={urlHelper.getURL('payment-expired')} component={PaymentTokenExpired}/>
               <Route exact path="/blogs/:title" component={SingleBlogPost}/>
               <Route exact path={urlHelper.getURL('case-study')} component={CaseStudies} />
               <Route exact path="/case-study/:title" component={SingleCaseStudy}/>
               <PrivateRoute exact path={urlHelper.getURL('client')} component={ClientHome}/>
               <PrivateRoute exact path={urlHelper.getURL('client-orders')} component={PendingOrders}/>
               <PrivateRoute exact path={urlHelper.getURL('client-orders-detail')} component={OrderDetails} />
               <PrivateRoute exact path={urlHelper.getURL('client-orders-invoice')} component={Invoice}/>
               <Route component={FourZeroFour}/>
           </Switch>
        </Router>
     )
   }
}


export default App;
