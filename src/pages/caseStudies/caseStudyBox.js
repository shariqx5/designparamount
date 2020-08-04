import React,{Component} from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class CaseStudyBox extends Component{

      constructor(props){
          super(props);
          this.state = {
              redirect:false,
              url:""
          }
      }


      onClick = (event)=>{
		event.preventDefault();
		const {url_title} = this.props;
		this.setState({
			url:`/case-study/${url_title}`,
			redirect:true
		})
    }
    


      render(){

         const {redirect,url} = this.state;
         if(redirect){
             return <Redirect to={url}/>
         }

          return(
            <div className="single-blog case-study-item">
                <a href="#" onClick={this.onClick}>
                    <div className="blog-img">
                        <img src={this.props.main_image} alt=""/>
                    </div>
                </a>
                <div className="blog-detail">
                <p className="blog-date">{this.props.month+" "+this.props.day+", "+this.props.year}</p>
                    <a href="#" onClick={this.onClick}>
                        <h6>{this.props.title}</h6>
                    </a>
                    <p className="blog-description">
                        <a href="#" onClick={this.onClick}>Read More</a>
                    </p>
                </div>
            </div>
          )
      }
}


export default CaseStudyBox;