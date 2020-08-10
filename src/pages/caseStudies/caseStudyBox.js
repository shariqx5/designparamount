import React,{Component} from 'react';
import { withRouter} from 'react-router-dom/cjs/react-router-dom.min';

class CaseStudyBox extends Component{

      constructor(props){
          super(props);
      }


      onClick = (event)=>{
		event.preventDefault();
        const {url_title} = this.props;
        this.props.history.push(`/case-study/${url_title}`);
    }
    


      render(){
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


export default withRouter(CaseStudyBox);